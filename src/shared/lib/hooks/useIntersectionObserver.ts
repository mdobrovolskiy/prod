import { useEffect, type MutableRefObject } from 'react'

export interface useIntersectionObserverProps {
    callback?: () => void
    wrapperRef: MutableRefObject<HTMLDivElement | null>
    triggerRef: MutableRefObject<HTMLDivElement | null>
}

export const useIntersectionObserver = ({
    callback,
    wrapperRef,
    triggerRef,
}: useIntersectionObserverProps) => {
    useEffect(() => {
        let observer: IntersectionObserver
        if (callback && triggerRef.current) {
            console.log('observe')
            const options = {
                root: wrapperRef.current,
                rootMargin: '0px',
                threshold: 0.1,
            }

            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback()
                }
            }, options)

            observer.observe(triggerRef.current)
        }
        return () => {
            if (observer && triggerRef.current) {
                observer.unobserve(triggerRef.current)
            }
        }
    }, [triggerRef, wrapperRef, callback])
}
