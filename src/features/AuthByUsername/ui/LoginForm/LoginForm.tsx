import {
    useState,
    type FC,
    type ChangeEvent,
    type FormEvent,
    useRef,
} from 'react'
import styles from './LoginForm.module.scss'
import { Input, InputTheme } from '../../../../widgets/Input/Input'
import { Button, ThemeButton } from '../../../../widgets/Button/ui/Button'
import { useDispatch, useSelector } from 'react-redux'
import { loginThunk } from '../../model/services/loginThunk'
import { authDataSelector } from '../../model/selectors/getAuthData'
import { type authSchema } from '../../model/types/authSchema'

interface LoginFormProps {
    className?: string
}

export const LoginForm: FC<LoginFormProps> = (props) => {
    const [login, setLogin] = useState('')

    const [pass, setPass] = useState('')

    const [isPassFocused, setIsPassFocused] = useState(false)

    const authData: authSchema = useSelector(authDataSelector)

    const { isLoading, error } = authData

    const dispatch = useDispatch()

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.keyCode === 40) {
            setIsPassFocused(true)
        }
    }

    const onLoginChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLogin(e.target.value)
    }

    const onPassChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPass(e.target.value)
    }

    const onSubmit = (e: FormEvent) => {
        e.preventDefault()
        dispatch(loginThunk({ username: login, password: pass }))
    }
    return (
        <form className={styles.LoginForm}>
            <h2>Log in</h2>
            {error && <span>{error}</span>}
            <Input
                onKeyDown={(e) => {
                    onKeyDown(e)
                }}
                className={styles.inputs}
                placeholder="login"
                type="text"
                theme={InputTheme.LOGIN}
                value={login}
                onChange={onLoginChange}
                autoFocus
            />
            <Input
                isFocused={isPassFocused}
                className={styles.inputs}
                placeholder="password"
                type="password"
                theme={InputTheme.LOGIN}
                value={pass}
                onChange={onPassChange}
            />
            <Button
                disabled={isLoading}
                onClick={(e) => {
                    onSubmit(e)
                }}
                theme={ThemeButton.MAIN}
            >
                Login
            </Button>
        </form>
    )
}
