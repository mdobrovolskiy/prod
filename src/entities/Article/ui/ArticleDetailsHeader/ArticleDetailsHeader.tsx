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
            <div className={styles.descr}>
                <div className={styles.date}>
                    <img
                        width="20"
                        height="20"
                        src="https://img.icons8.com/ios-filled/50/FFFFFF/calendar--v1.png"
                        alt="calendar--v1"
                    />
                    {data?.createdAt}
                </div>
                <div className={styles.views}>
                    <img
                        width="20"
                        height="20"
                        src="https://img.icons8.com/ios-glyphs/30/FFFFFF/visible--v1.png"
                        alt="visible--v1"
                    />
                    {data?.views}{' '}
                </div>
            </div>
            <div className={styles.subtitle}>
                <span className={styles.types}>{data?.type?.join(', ')}</span>
            </div>
            <Text
                text={data?.title}
                type={'h1'}
                align="left"
                className={styles.title}
            />

            <Text
                type="p"
                text={data?.subtitle}
                align="left"
                className={styles.sub}
            />
        </div>
    )
}
