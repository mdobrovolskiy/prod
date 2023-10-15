import { useRef, type FC, type MutableRefObject, useEffect } from 'react'
import styles from './Page.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useIntersectionObserver } from 'shared/lib/hooks/useIntersectionObserver'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import {
    saveScrollPositionActions,
    saveScrollPositionReducer,
} from 'features/SaveScrollPosition/model/slice/saveScrollPositionSlice'
import { ReducerLoader } from 'helpers/ReducerLoader/ReducerLoader'
import { useSelector } from 'react-redux'
import { getScrollPositions } from 'features/SaveScrollPosition/model/selectors/getScrollPositions'
import { useLocation } from 'react-router-dom'
import { useThrottle } from 'shared/lib/hooks/useThrottle'

interface PageProps {
    className?: string
    onScrollEnd?: () => void
}

const reducers = {
    saveScrollPositionReducer,
}

export const Page: FC<PageProps> = (props) => {
    const { className, children, onScrollEnd } = props
    const dispatch = useAppDispatch()
    const wrapperRef: MutableRefObject<HTMLDivElement | null> = useRef(null)
    const triggerRef: MutableRefObject<HTMLDivElement | null> = useRef(null)
    useIntersectionObserver({ callback: onScrollEnd, wrapperRef, triggerRef })

    const { pathname } = useLocation()

    const scrollPositions = useSelector(getScrollPositions)

    const savedPositionOfThisPage = scrollPositions?.[pathname]

    useEffect(() => {
        if (savedPositionOfThisPage && wrapperRef.current) {
            wrapperRef.current.scrollTop = savedPositionOfThisPage
        }
    }, [])

    const onScroll = useThrottle(() => {
        if (wrapperRef.current) {
            dispatch(
                saveScrollPositionActions.setPagePosition({
                    page: pathname,
                    position: wrapperRef.current?.scrollTop,
                })
            )
        }
    }, 400)

    return (
        <ReducerLoader reducers={reducers}>
            <section
                onScroll={onScroll}
                ref={wrapperRef}
                className={classNames(styles.Page, {}, [])}
            >
                {children}
                {onScrollEnd && <div ref={triggerRef}></div>}
            </section>
        </ReducerLoader>
    )
}
