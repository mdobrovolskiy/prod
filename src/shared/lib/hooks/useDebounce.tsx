import { useCallback, useRef } from 'react'

export const useDebounce = (callback: () => void, delay: number) => {
    const timer = useRef<any>()
    return useCallback(() => {
        if (timer.current) {
            clearTimeout(timer.current)
        }
        timer.current = setTimeout(() => {
            callback()
        }, delay)
    }, [])
}
