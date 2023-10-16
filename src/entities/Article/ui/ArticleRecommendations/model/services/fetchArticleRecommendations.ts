import { createAsyncThunk } from '@reduxjs/toolkit'
import { isAxiosError } from 'axios'

export const fetchArticlesRecommendations = createAsyncThunk(
    'article/fetchArticlesRecommendations',
    async (_, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi
        try {
            // @ts-expect-error
            const response = await extra.api.get('/articles', {
                params: {
                    _limit: 4,
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
