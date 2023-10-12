import { type FC } from 'react'
import { Page } from 'shared/Page/Page'
import { classNames } from 'shared/lib/classNames/classNames'
interface NotFoundProps {
    className?: string
}
export const NotFound: FC<NotFoundProps> = (props) => {
    const { className } = props
    return <Page className={classNames('notFound', {}, [])}>NotFound</Page>
}
