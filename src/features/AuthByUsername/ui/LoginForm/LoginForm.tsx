import { useState, type FC, type ChangeEvent, useRef, memo } from 'react'
import styles from './LoginForm.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Input, InputTheme } from '../../../../widgets/Input/Input'
interface LoginFormProps {
  className?: string
}

export const LoginForm: FC<LoginFormProps> = (props) => {
    const { className } = props
    const [login, setLogin] = useState('')
    const [pass, setPass] = useState('')
    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLogin(e.target.value)
    }

    return (
        <form className={styles.LoginForm}>
            <h2>Log in</h2>
            <Input className={styles.inputs} placeholder='login' type='text' theme={InputTheme.LOGIN} value={login} onChange={onInputChange} autoFocus/>
            <Input className={styles.inputs} placeholder='password' type='text' theme={InputTheme.LOGIN} />
        </form>
    )
}
