import { createAsyncThunk } from '@reduxjs/toolkit'
import { Axios, isAxiosError } from 'axios'

export const fetchArticles = createAsyncThunk(
    'article/fetchArticles',
    async (_, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi

        try {
            // @ts-expect-error
            const response = await extra.api.get('/articles', {
                params: {
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
