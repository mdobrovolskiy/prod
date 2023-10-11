import { type FC, type ChangeEvent } from 'react'
import styles from './AddFormComment.module.scss'
import { Input } from 'widgets/Input/Input'
import { Button } from 'widgets/Button'
import { ThemeButton } from 'widgets/Button/ui/Button'

import { Loader } from 'widgets/Loader'
import { classNames } from 'shared/lib/classNames/classNames'
interface AddFormCommentProps {
    className?: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    value?: string
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
    isLoading?: boolean
}

export const AddFormComment: FC<AddFormCommentProps> = (props) => {
    const { onChange, onSubmit, value, className, isLoading } = props

    if (isLoading) {
        return <Loader />
    }
    return (
        <form
            onSubmit={onSubmit}
            className={classNames(styles.Form, {}, [className])}
        >
            <Input
                onChange={onChange}
                value={value}
                placeholder="Add comment"
            />
            <Button theme={ThemeButton.MAIN}>Send</Button>
        </form>
    )
}
