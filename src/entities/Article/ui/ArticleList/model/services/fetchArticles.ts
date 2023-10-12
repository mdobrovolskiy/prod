import { createAsyncThunk } from '@reduxjs/toolkit'
import { Axios, isAxiosError } from 'axios'
import {
    getArticleListLimit,
    getArticleListPageNum,
} from 'entities/Article/ui/ArticleList/model/selectors/articleListSelectors'
import { articleListActions } from '../slice/articleListSlice'

export const fetchArticles = createAsyncThunk(
    'article/fetchArticles',
    async (_, thunkApi) => {
        const { extra, rejectWithValue, getState, dispatch } = thunkApi

        const state = getState() as any

        const limit = getArticleListLimit(state)

        const page = getArticleListPageNum(state)

        try {
            // @ts-expect-error
            const response = await extra.api.get('/articles', {
                params: {
                    _limit: limit,
                    _page: page,
                    _expand: 'user',
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
