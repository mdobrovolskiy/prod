import { useMemo, type FC, memo, type ChangeEvent } from 'react'
import styles from './Select.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

export interface OptionsSelect {
    value: string
    content: string
}

interface SelectProps {
    className?: string
    options?: OptionsSelect[]
    value?: string | number
    onChange?: (e: ChangeEvent<HTMLSelectElement>) => void
    readonly?: boolean
}
const Select_: FC<SelectProps> = (props) => {
    const { className, options, value, onChange, readonly } = props

    const optionList = useMemo(() => {
        return options?.map((item) => (
            <option key={item.value} value={item.value}>
                {item.content}
            </option>
        ))
    }, [options])

    return (
        <select
            disabled={readonly}
            onChange={onChange}
            value={value}
            className={classNames(styles.main, {}, [className])}
        >
            {optionList}
        </select>
    )
}
export const Select = memo(Select_)
