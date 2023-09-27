import { useEffect, type FC, Suspense } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Modal } from 'widgets/Modal/ui/Modal'
import { LoginFormAsync } from '../LoginForm/LoginFormAsync'
import { type ReduxStoreWithManager } from 'app/providers/StoreProvider/types/StateSchema'
import { authReducer } from 'features/AuthByUsername/model/slice/authSlice'
import { useDispatch, useStore } from 'react-redux'
import { Loader } from 'widgets/Loader'
interface LoginModalProps {
    className?: string
    onClose: () => void
}
export const LoginModal: FC<LoginModalProps> = (props) => {
    const { className, onClose } = props
    const dispatch = useDispatch()
    const store = useStore() as ReduxStoreWithManager
    useEffect(() => {
        store.reducerManager.add('authReducer', authReducer)
        dispatch({ type: '@added reducer' })

        return () => {
            store.reducerManager.remove('authReducer')
            dispatch({ type: '@removed reducer' })
        }
    }, [store])

    return (
        <Modal onClose={onClose}>
            <Suspense fallback={<Loader />}>
                <LoginFormAsync />
            </Suspense>
        </Modal>
    )
}
