import { useEffect, type FC, Suspense } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Modal } from 'widgets/Modal/ui/Modal'
import { LoginFormAsync } from '../LoginForm/LoginFormAsync'
import { type ReduxStoreWithManager } from 'app/providers/StoreProvider/types/StateSchema'
import { authReducer } from 'features/AuthByUsername/model/slice/authSlice'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { Loader } from 'widgets/Loader'
import { userIdSelector } from 'features/AuthByUsername/model/selectors/getAuthData'
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

    const userId = useSelector(userIdSelector)

    useEffect(() => {
        if (userId) {
            onClose()
        }
    }, [userId])

    return (
        <Modal onClose={onClose}>
            <Suspense fallback={<Loader />}>
                <LoginFormAsync />
            </Suspense>
        </Modal>
    )
}
