import {
    useState,
    type FC,
    type ChangeEvent,
    type FormEvent,
    useRef,
    type RefObject,
    useCallback,
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

export enum InputType {
    LOGIN = 'login',
    PASS = 'pass',
}

const LoginForm: FC<LoginFormProps> = (props) => {
    const [login, setLogin] = useState('')

    const [pass, setPass] = useState('')

    const { isLoading, error }: authSchema = useSelector(authDataSelector)

    const loginRef: RefObject<HTMLInputElement> = useRef(null)

    const passRef: RefObject<HTMLInputElement> = useRef(null)

    const dispatch = useDispatch()

    const onKeyDown = (
        e: React.KeyboardEvent<HTMLInputElement>,
        inputName: InputType
    ) => {
        if (e.keyCode === 40) {
            if (inputName === InputType.LOGIN) {
                passRef.current.focus()
            }
        } else if (e.keyCode === 38) {
            loginRef.current.focus()
        }
    }

    const onLoginChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLogin(e.target.value)
    }

    const onPassChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setPass(e.target.value)
    }, [])

    const onSubmit = (e: FormEvent) => {
        e.preventDefault()
        dispatch(loginThunk({ username: login, password: pass }))
    }

    return (
        <form className={styles.LoginForm}>
            <h2>Log in</h2>
            {error && <span>{error}</span>}
            <Input
                ref={loginRef}
                onKeyDown={(e) => {
                    onKeyDown(e, InputType.LOGIN)
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
                ref={passRef}
                onKeyDown={(e) => {
                    onKeyDown(e, InputType.PASS)
                }}
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
export default LoginForm
