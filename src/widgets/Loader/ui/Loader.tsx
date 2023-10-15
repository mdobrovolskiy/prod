import { type FC } from 'react'
import './Loader.scss'
import { classNames } from 'shared/lib/classNames/classNames'
interface LoaderProps {
    className?: string
}
export const Loader: FC<LoaderProps> = (props) => {
    const { className } = props
    return (
        <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
