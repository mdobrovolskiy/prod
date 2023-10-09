import { type FC } from 'react'
import styles from './ArticleDetailsHeader.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Text } from 'widgets/Text/Text'
import { type Article } from 'entities/Article/model/types/Article'

interface ArticleDetailsHeaderProps {
    className?: string
    data?: Article
}
export const ArticleDetailsHeader: FC<ArticleDetailsHeaderProps> = (props) => {
    const { className, data } = props

    return (
        <div className={classNames(styles.ArticleDetailsHeader, {}, [])}>
            <div className={styles.avatarBlock}>
                <div className={styles.avatarWrapper}>
                    <img src={data?.img} alt="" />
                </div>
            </div>

            <Text text={data?.title} type={'h1'} className={styles.title} />

            <Text type="p" text={data?.subtitle} align="left" />
            <div className={styles.subtitle}>{data?.createdAt}</div>
            <div className={styles.subtitle}>{data?.views} views</div>
            <div className={styles.subtitle}>
                {data?.type?.map((item) => <span key={item}>{item}</span>)}
            </div>
        </div>
    )
}
