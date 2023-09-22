import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
interface NotFoundProps {
  className?: string
}
export const NotFound: FC<NotFoundProps> = (props) => {
    const { className } = props
    return (
        <div className={classNames('notFound', {}, [])}>NotFound</div>
    )
}
