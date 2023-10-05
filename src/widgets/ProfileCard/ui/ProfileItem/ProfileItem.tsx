import { type FC, type ChangeEvent } from 'react'
import styles from './ProfileItem.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Input } from 'widgets/Input/Input'
import { type Profile } from 'entities/Profile/model/types/profile'
interface ProfileItemProps {
    className?: string
    value?: string | number
    name: string
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    readonly?: boolean
}
export const ProfileItem: FC<ProfileItemProps> = (props) => {
    const { className, onChange, value, readonly, name } = props
    return (
        <div className={styles.stat}>
            {name}:{' '}
            <Input
                onChange={(e) => {
                    onChange?.(e)
                }}
                value={value}
                readOnly={readonly}
            />
        </div>
    )
}
