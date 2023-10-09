import { memo, type ChangeEvent, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { countryOptions } from '../model/options/countryOptions'
import { Select } from 'widgets/Select/Select'
interface CountrySelectProps {
    className?: string
    value?: string | number
    readonly?: boolean
    onChange?: (e: ChangeEvent<HTMLSelectElement>) => void
}
const CountrySelect_: FC<CountrySelectProps> = (props) => {
    const { className, readonly, onChange, value } = props
    return (
        <Select
            readonly={readonly}
            onChange={onChange}
            value={value}
            className={classNames('', {}, [className])}
            options={countryOptions}
        />
    )
}
export const CountrySelect = memo(CountrySelect_)
