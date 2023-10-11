import { createAsyncThunk } from '@reduxjs/toolkit'
import axios, { AxiosError } from 'axios'
import { getArticleId } from 'entities/Article/model/selectors/getArticleId'
import { type ThunkConfig } from 'app/providers/StoreProvider/types/ThunkConfig'

export const fetchArticleComments = createAsyncThunk(
    'article/fetchArticleComments',
    async (_, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi

        const articleId = getArticleId(getState() as any)
        if (!articleId) {
            return rejectWithValue('Article not found')
        }
        try {
            // @ts-expect-error
            const res = await extra.api.get('/comments', {
                params: {
                    articleId,
                    _expand: 'user',
                },
            })

            return res.data
        } catch (err) {
            if (axios.isAxiosError(err)) {
                return rejectWithValue(err.message)
            } else {
                return rejectWithValue('Unexpected error')
            }
        }
    }
)
