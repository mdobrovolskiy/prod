import { type FC } from 'react'
import styles from './ArticleCard.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { type Article } from 'entities/Article/model/types/Article'
import { Avatar } from 'widgets/Avatar/Avatar'
import { Button, ThemeButton } from 'widgets/Button/ui/Button'
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { Animation } from 'widgets/Animation/Animation'

export enum ArticleCardSize {
    BIG = 'big',
    SMALL = 'small',
}

interface ArticleCardProps {
    className?: string
    size: ArticleCardSize
    article: Article
}
export const ArticleCard: FC<ArticleCardProps> = (props) => {
    const { className, size, article } = props

    const { createdAt, title, type, views, subtitle, img, blocks, id } = article
    const articleText = blocks?.find((item) => item.type === 'TEXT')

    if (size === ArticleCardSize.BIG) {
        return (
            <Animation className={styles.animation}>
                <div className={classNames(styles.ArticleCardBig, {}, [])}>
                    <div className={styles.card}>
                        <div className={styles.info}>
                            <AppLink to={`/${article.user?.username}`}>
                                <div className={styles.user}>
                                    <Avatar alt="" src={article.user?.avatar} />
                                    <span className={styles.name}>
                                        {article.user?.username}
                                    </span>
                                </div>
                            </AppLink>
                            <div className={styles.created}>
                                <span>{createdAt}</span>
                            </div>
                        </div>
                        <div className={styles.title}>
                            <h3>{title}</h3>
                        </div>
                        <div className={styles.tags}>
                            <span>{type?.join(', ')}</span>
                        </div>
                        <div className={styles.topCard}>
                            <img src={img} alt="" />
                        </div>
                        <div className={styles.articleText}>
                            {
                                // @ts-expect-error
                                articleText.paragraphs.map((item, i) => (
                                    <p key={i}>{item}</p>
                                ))
                            }
                        </div>
                        <div className={styles.bottomCard}>
                            <AppLink
                                theme={AppLinkTheme.SECONDARY}
                                to={`/articles/${id}`}
                            >
                                <Button
                                    className={styles.readMore}
                                    theme={ThemeButton.BLACK}
                                >
                                    Read more
                                </Button>
                            </AppLink>

                            <span>
                                {views}{' '}
                                <img
                                    width="20"
                                    height="20"
                                    src="https://img.icons8.com/ios-glyphs/30/FFFFFF/visible--v1.png"
                                    alt="visible--v1"
                                />
                            </span>
                        </div>
                    </div>
                </div>
            </Animation>
        )
    }
    return (
        <Animation>
            <AppLink theme={AppLinkTheme.SECONDARY} to={`/articles/${id}`}>
                <div className={classNames(styles.ArticleCardSmall, {}, [])}>
                    <div className={styles.card}>
                        <div className={styles.topCard}>
                            <img src={img} alt="" />
                        </div>
                        <div className={styles.bottomCard}>
                            <span className={styles.type}>
                                {type?.join(', ')}
                            </span>
                            <span
                                className={styles.views}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '5px',
                                }}
                            >
                                {views}{' '}
                                <img
                                    width="20"
                                    height="20"
                                    src="https://img.icons8.com/ios-glyphs/30/FFFFFF/visible--v1.png"
                                    alt="visible--v1"
                                />
                            </span>
                        </div>
                        <div className={styles.title}>
                            <h3>{title}</h3>
                        </div>
                    </div>
                </div>
            </AppLink>
        </Animation>
    )
}
