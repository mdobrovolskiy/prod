import { createAsyncThunk } from '@reduxjs/toolkit'
import { Axios, isAxiosError } from 'axios'
import {
    getArticleListLimit,
    getArticleListPageNum,
} from 'entities/Article/ui/ArticleList/model/selectors/articleListSelectors'
import { articleListActions } from '../slice/articleListSlice'
import {
    getArticleSearch,
    getArticleSort,
    getArticleOrder,
    getArticleType,
} from 'entities/Article/ui/ArticleFilters/model/selectors/ArticleFiltersSelector'
import { type StateSchema } from 'app/providers/StoreProvider/types/StateSchema'
import { setSearchParams } from 'shared/lib/hooks/useSearchParams'

export const fetchArticles = createAsyncThunk(
    'article/fetchArticles',
    async (_, thunkApi) => {
        const { extra, rejectWithValue, getState, dispatch } = thunkApi

        const state = getState() as StateSchema

        const limit = getArticleListLimit(state)

        const page = getArticleListPageNum(state)

        const sort = getArticleSort(state)
        const order = getArticleOrder(state)
        const search = getArticleSearch(state)
        const type = getArticleType(state)

        setSearchParams({
            sort,
            order,
            search,
            type,
        })

        try {
            // @ts-expect-error
            const response = await extra.api.get('/articles', {
                params: {
                    _limit: limit,
                    _page: page,
                    _expand: 'user',
                    _sort: sort,
                    _order: order,
                    q: search,
                    type,
                },
            })

            return response.data
        } catch (err) {
            if (isAxiosError(err)) {
                return rejectWithValue(err.message)
            } else {
                return rejectWithValue('Unknown error')
            }
        }
    }
)
