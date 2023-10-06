import { type ChangeEvent, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { currencyOptions } from 'entities/Currency/model/options/currencyOptions'
import { type OptionsSelect, Select } from 'widgets/Select/Select'
interface CurrenctSwitchProps {
    className?: string
    value?: string | number
    readonly?: boolean
    onChange?: (e: ChangeEvent<HTMLSelectElement>) => void
}
export const CurrenctSwitch: FC<CurrenctSwitchProps> = (props) => {
    const { className, readonly, onChange, value } = props
    return (
        <Select
            readonly={readonly}
            onChange={onChange}
            value={value}
            className={classNames('', {}, [className])}
            options={currencyOptions}
        />
    )
}
