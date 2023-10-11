import { createAsyncThunk } from '@reduxjs/toolkit'
import { isAxiosError } from 'axios'
import { getArticleId } from 'entities/Article/model/selectors/getArticleId'
import { getArticleCommentText } from '../selectors/articleCommentSelectors'
import { getUserId } from 'entities/User/selectors/getUserId'
import { fetchArticleComments } from 'pages/ArticleDetailsPage/model/services/fetchArticleComments'

export const sendArticleComment = createAsyncThunk(
    'articleDetails/sendArticleComment',
    async (_, thunkApi) => {
        const { extra, rejectWithValue, getState, dispatch } = thunkApi

        const state = getState() as any

        const text = getArticleCommentText(state)

        const articleId = getArticleId(state)

        const userId = getUserId(state)

        try {
            // @ts-expect-error
            const response = await extra.api.post('/comments', {
                text,
                articleId,
                userId,
            })
            dispatch(fetchArticleComments())

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
