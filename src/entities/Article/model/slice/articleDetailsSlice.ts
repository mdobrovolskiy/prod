import { type PayloadAction, createSlice } from '@reduxjs/toolkit'

import { type ArticleDetailsSchema } from 'entities/Article/model/types/articleDetailsSchema'
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById'

const initialState: ArticleDetailsSchema = {
    isLoading: false,
    data: undefined,
    error: undefined,
}

const articleDetailsSlice = createSlice({
    name: 'articleDetails',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchArticleById.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchArticleById.rejected, (state, action) => {
            state.error = action.payload as string
            state.isLoading = false
        })
        builder.addCase(fetchArticleById.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload
        })
    },
})

export const { actions: articleDetailsActions } = articleDetailsSlice
export const { reducer: articleDetailsReducer } = articleDetailsSlice
