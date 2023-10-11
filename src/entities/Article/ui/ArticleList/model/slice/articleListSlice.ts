import { type ArticleListSchema } from './../types/articleListTypes'
import { type PayloadAction, createSlice } from '@reduxjs/toolkit'

import { fetchArticles } from 'entities/Article/ui/ArticleList/model/services/fetchArticles'

const initialState: ArticleListSchema = {
    isLoading: false,
    data: undefined,
    error: undefined,
    smallCards: true,
}

const articleListSlice = createSlice({
    name: 'articleList',
    initialState,
    reducers: {
        setIsSmallSize(state, action) {
            state.smallCards = action.payload
        },
    },
    extraReducers(builder) {
        builder.addCase(fetchArticles.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchArticles.rejected, (state, action) => {
            state.error = action.payload as string
            state.isLoading = false
        })
        builder.addCase(fetchArticles.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload
        })
    },
})

export const { actions: articleListActions } = articleListSlice
export const { reducer: articleListReducer } = articleListSlice
