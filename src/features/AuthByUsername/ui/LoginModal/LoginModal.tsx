import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Modal } from 'widgets/Modal/ui/Modal'
import { LoginForm } from '../LoginForm/LoginForm'
interface LoginModalProps {
    className?: string
    onClose: () => void
}
export const LoginModal: FC<LoginModalProps> = (props) => {
    const { className, onClose } = props
    return (
        <Modal onClose={onClose}>
            <LoginForm />
        </Modal>
    )
}
