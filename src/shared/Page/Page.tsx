import { useRef, type FC, type MutableRefObject } from 'react'
import styles from './Page.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useIntersectionObserver } from 'shared/lib/hooks/useIntersectionObserver'
interface PageProps {
    className?: string
    onScrollEnd?: () => void
}
export const Page: FC<PageProps> = (props) => {
    const { className, children, onScrollEnd } = props

    const wrapperRef: MutableRefObject<HTMLDivElement | null> = useRef(null)
    const triggerRef: MutableRefObject<HTMLDivElement | null> = useRef(null)
    useIntersectionObserver({ callback: onScrollEnd, wrapperRef, triggerRef })

    return (
        <section ref={wrapperRef} className={classNames(styles.Page, {}, [])}>
            {children}
            <div ref={triggerRef}></div>
        </section>
    )
}
