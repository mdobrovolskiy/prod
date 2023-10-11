import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type ArticleCommentsSlice } from '../types/articleComments'
import { fetchArticleComments } from 'pages/ArticleDetailsPage/model/services/fetchArticleComments'

const initialState: ArticleCommentsSlice = {
    isLoading: false,
    error: undefined,
    data: undefined,
}

const articleCommentsSlice = createSlice({
    name: 'articleComments',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchArticleComments.pending, (state) => {
            state.isLoading = true
            state.error = undefined
        })
        builder.addCase(fetchArticleComments.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = undefined
            state.data = action.payload
        })
        builder.addCase(fetchArticleComments.rejected, (state) => {
            state.isLoading = false
            state.error = 'Something went wrong'
        })
    },
})

export const { actions: articleCommentsActions } = articleCommentsSlice
export const { reducer: articleCommentsReducer } = articleCommentsSlice
