import { type FC, type ChangeEvent, memo } from 'react'
import styles from './ProfileItem.module.scss'
import { Input } from 'widgets/Input/Input'
import { type OptionsSelect, Select } from 'widgets/Select/Select'

type SelectType = (e: ChangeEvent<HTMLSelectElement>) => void
type InputType = (e: ChangeEvent<HTMLInputElement>) => void

interface ProfileItemProps {
    className?: string
    value?: string | number
    name: string
    onChange?: InputType
    readonly?: boolean
    options?: OptionsSelect[]
    onChangeSelect?: SelectType
}
const ProfileItem_: FC<ProfileItemProps> = (props) => {
    const {
        className,
        onChange,
        value,
        readonly,
        name,
        options,
        onChangeSelect,
    } = props
    return (
        <div className={styles.stat}>
            {name}:{' '}
            {name === 'Currency' || name === 'Country' ? (
                <Select
                    readonly={readonly}
                    onChange={onChangeSelect}
                    value={value}
                    className={styles.select}
                    options={options}
                />
            ) : (
                <Input
                    className={styles.reset}
                    onChange={(e) => {
                        onChange?.(e)
                    }}
                    value={value}
                    readOnly={readonly}
                />
            )}
        </div>
    )
}
export const ProfileItem = memo(ProfileItem_)
