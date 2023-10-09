import { type FC, useEffect } from 'react'
import styles from './ArticleDetails.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
interface ArticleDetailsProps {
    className?: string
    id: number | string
}
export const ArticleDetails: FC<ArticleDetailsProps> = (props) => {
    const { className, id } = props

    useEffect(() => {}, [id])

    return (
        <div className={classNames(styles.ArticleDetails, {}, [])}>
            ArticleDetails
        </div>
    )
}
