import { useRef, type FC, type ReactNode, useEffect, type RefObject } from 'react'
import styles from './Modal.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
interface ModalProps {
    className?: string
    children?: ReactNode
    onClose?: () => void

}

export const Modal: FC<ModalProps> = (props) => {
    const { className, children, onClose } = props

    const contentRef: RefObject<HTMLDivElement> = useRef(null)
    function checkOutsideClick (e: MouseEvent) {
        if (!contentRef.current.contains(e.target as Node)) {
            onClose()
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', checkOutsideClick)

        return () => {
            document.removeEventListener('mousedown', checkOutsideClick)
        }
    }, [])

    return (
        <div className={classNames(styles.Modal, { }, [className, styles.full])}>
            <div ref={contentRef} className={styles.content}>
                {children}
            </div>
        </div>
    )
}
