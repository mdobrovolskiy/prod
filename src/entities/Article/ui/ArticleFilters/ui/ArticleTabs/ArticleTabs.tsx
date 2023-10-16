import { useMemo, type FC } from 'react'
import styles from './ArticleTabs.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Tab, type TabProps } from 'widgets/Tab/Tab'
import { useSelector } from 'react-redux'
import { getArticleType } from 'entities/Article/ui/ArticleFilters/model/selectors/ArticleFiltersSelector'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { articleFiltersActions } from '../../model/slice/articleFilters'
import { fetchArticles } from 'entities/Article/ui/ArticleList/model/services/fetchArticles'
import { articleListActions } from 'entities/Article/ui/ArticleList/model/slice/articleListSlice'
import { ArticleType } from '../../model/types/articleFilters'
import { getArticleListLoading } from 'entities/Article/ui/ArticleList/model/selectors/articleListSelectors'

interface ArticleTabsProps {
    className?: string
}

export const ArticleTabs: FC<ArticleTabsProps> = (props) => {
    const { className } = props
    const dispatch = useAppDispatch()

    const type = useSelector(getArticleType)

    const isLoading = useSelector(getArticleListLoading)

    const onTypeClick = (value: string) => {
        if (type === value) {
            dispatch(articleFiltersActions.setType(null))
            dispatch(articleListActions.resetData())
            dispatch(fetchArticles())
        } else {
            dispatch(articleFiltersActions.setType(value))
            dispatch(articleListActions.resetData())
            dispatch(fetchArticles())
        }
    }
    const articleTabs: TabProps[] = useMemo(() => {
        return [
            { content: ArticleType.ART, onClick: onTypeClick },
            { content: ArticleType.BUSINESS, onClick: onTypeClick },
            { content: ArticleType.ECONOMICS, onClick: onTypeClick },
            { content: ArticleType.TECHNOLOGIES, onClick: onTypeClick },
            { content: ArticleType.IT, onClick: onTypeClick },
            { content: ArticleType.SPORT, onClick: onTypeClick },
        ]
    }, [type])

    return (
        <div className={classNames(styles.ArticleTabs, {}, [])}>
            {articleTabs.map((item) => (
                <Tab
                    content={item.content}
                    disabled={isLoading}
                    onClick={item.onClick}
                    key={item.content}
                    className={classNames('', {
                        [styles.selected]: type === item.content,
                    })}
                />
            ))}
        </div>
    )
}
