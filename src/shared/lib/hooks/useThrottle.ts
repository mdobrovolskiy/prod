import { useCallback, useRef } from 'react'

export const useThrottle = (callback: () => void, delay: number) => {
    const triggered = useRef(false)

    return useCallback(() => {
        if (!triggered.current) {
            callback()
            triggered.current = true
            setTimeout(() => {
                triggered.current = false
            }, delay)
        }
    }, [])
}
