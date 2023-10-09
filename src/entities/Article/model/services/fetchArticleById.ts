import { createAsyncThunk } from '@reduxjs/toolkit'
import { Axios, isAxiosError } from 'axios'

type ArticleIdType = string | number

export const fetchArticleById = createAsyncThunk(
    'article/fetchArticleById',
    async (id: ArticleIdType, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi

        try {
            // @ts-expect-error
            const response = await extra.api.get(`/articles/${id}`)

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
