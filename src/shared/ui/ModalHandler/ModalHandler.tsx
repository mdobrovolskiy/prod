/* eslint-disable i18next/no-literal-string */
import { useCallback, useState, type FC } from 'react'
import styles from './ModalHandler.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ThemeButton } from 'widgets/Button/ui/Button'
import { Modal } from 'widgets/Modal/ui/Modal'
interface ModalHandlerProps {
  className?: string
}
export const ModalHandler: FC<ModalHandlerProps> = (props) => {
    const { className, children } = props

    const [modalOpened, setModalOpened] = useState(false)

    const handleModal = useCallback(() => {
        setModalOpened((prev) => !prev)
    }, [])

    return (
        <>
            <Button theme={ThemeButton.MAIN} onClick={handleModal}
                className={classNames(styles.ModalHandler, {}, [])}>
                {children}
            </Button>
            {modalOpened && <Modal onClose={handleModal} >
                Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Amet unde excepturi
                voluptate esse commodi aliquam maiores pariatur repellat dolor quam.
            </Modal>}
        </>

    )
}
