import { type FC } from 'react'
import './Loader.scss'
import { classNames } from 'shared/lib/classNames/classNames'
interface LoaderProps {
  className?: string
}
export const Loader: FC<LoaderProps> = (props) => {
    const { className } = props
    return (
        <div className={classNames('', {}, [])}>
            <div className="loader">
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
                <div className="bar4"></div>
                <div className="bar5"></div>
                <div className="bar6"></div>
                <div className="bar7"></div>
                <div className="bar8"></div>
                <div className="bar9"></div>
                <div className="bar10"></div>
                <div className="bar11"></div>
                <div className="bar12"></div>
            </div>
        </div>
    )
}
