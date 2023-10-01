import { useEffect, type FC, Suspense } from 'react'
import { Modal } from 'widgets/Modal/ui/Modal'
import { LoginFormAsync } from '../LoginForm/LoginFormAsync'
import { authReducer } from 'features/AuthByUsername/model/slice/authSlice'
import { useSelector } from 'react-redux'
import { Loader } from 'widgets/Loader'
import { userIdSelector } from 'features/AuthByUsername/model/selectors/getAuthData'
import { useNavigate } from 'react-router-dom'
import { Routes } from 'app/providers/router/config/routerConfig'
import {
    ReducerLoader,
    type LoaderReducers,
} from 'entities/ReducerLoader/ReducerLoader'
interface LoginModalProps {
    className?: string
    onClose: () => void
}
export const LoginModal: FC<LoginModalProps> = (props) => {
    const { className, onClose } = props
    const navigate = useNavigate()
    const reducers: LoaderReducers = {
        authReducer,
    }
    const userId = useSelector(userIdSelector)

    useEffect(() => {
        if (userId) {
            onClose()
            navigate(Routes.PROFILE)
        }
    }, [userId])

    return (
        <Modal onClose={onClose}>
            <Suspense fallback={<Loader />}>
                <ReducerLoader reducers={reducers}>
                    <LoginFormAsync />
                </ReducerLoader>
            </Suspense>
        </Modal>
    )
}
