/* eslint-disable @typescript-eslint/no-misused-promises */
import { useCallback, type ChangeEvent, type FC, useMemo } from 'react'
import styles from './ArticleFilters.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { type OptionsSelect, Select } from 'widgets/Select/Select'
import { Input } from 'widgets/Input/Input'
import { ArticleOrder, ArticleSort } from './model/types/articleFilters'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import {
    getArticleSort,
    getArticleOrder,
    getArticleSearch,
} from 'entities/Article/ui/ArticleFilters/model/selectors/ArticleFiltersSelector'
import {
    articleFiltersActions,
    articleFiltersReducer,
} from './model/slice/articleFilters'
import { ReducerLoader } from 'helpers/ReducerLoader/ReducerLoader'
import { fetchArticles } from 'entities/Article/ui/ArticleList/model/services/fetchArticles'
import { articleListActions } from '../ArticleList/model/slice/articleListSlice'
import { useDebounce } from 'shared/lib/hooks/useDebounce'

interface ArticleFiltersProps {
    className?: string
}

const orderOptions: OptionsSelect[] = [
    { content: 'Ascending', value: ArticleOrder.ASC },
    { content: 'Descending', value: ArticleOrder.DESC },
]
const sortOptions: OptionsSelect[] = [
    { content: 'Views', value: ArticleSort.VIEW },
    { content: 'Date', value: ArticleSort.CREATEDAT },
]
const reducers = {
    articleFiltersReducer,
}
export const ArticleFilters: FC<ArticleFiltersProps> = (props) => {
    const dispatch = useAppDispatch()
    const order = useSelector(getArticleOrder)
    const sort = useSelector(getArticleSort)
    const search = useSelector(getArticleSearch) || ''

    const fetchData = useCallback(() => {
        dispatch(articleListActions.resetData())
        dispatch(fetchArticles())
        console.log(123)
    }, [dispatch])

    const debouncedSearch = useDebounce(fetchData, 500)

    const onSearchChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(articleFiltersActions.setSearch(e.target.value))
        debouncedSearch()
    }, [])

    const onSortChange = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(articleFiltersActions.setSort(e.target.value))
        dispatch(articleListActions.resetData())
        dispatch(fetchArticles())
    }
    const onOrderChange = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(articleFiltersActions.setOrder(e.target.value))
        dispatch(articleListActions.resetData())
        dispatch(fetchArticles())
    }

    const { className } = props
    return (
        <ReducerLoader reducers={reducers}>
            <div className={classNames(styles.ArticleFilters, {}, [])}>
                <Select
                    onChange={onSortChange}
                    options={sortOptions}
                    value={sort}
                    className={styles.select}
                />
                <Select
                    onChange={onOrderChange}
                    options={orderOptions}
                    value={order}
                    className={styles.select}
                />

                <Input
                    placeholder="Search"
                    onChange={onSearchChange}
                    value={search}
                    className={styles.input}
                />
            </div>
        </ReducerLoader>
    )
}
