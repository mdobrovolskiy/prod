import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { fetchArticlesRecommendations } from 'entities/Article/ui/ArticleRecommendations/model/services/fetchArticleRecommendations'
import { type articleRecommendationsTypes } from 'entities/Article/ui/ArticleRecommendations/model/types/articleRecommendationsTypes'

const initialState: articleRecommendationsTypes = {
    data: undefined,
    error: undefined,
    isLoading: false,
}

const articleRecommendationsSlice = createSlice({
    name: 'articleRecommendations',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchArticlesRecommendations.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(
            fetchArticlesRecommendations.rejected,
            (state, action) => {
                state.error = action.payload as string
                state.isLoading = false
            }
        )
        builder.addCase(
            fetchArticlesRecommendations.fulfilled,
            (state, action) => {
                state.isLoading = false
                state.data = action.payload
            }
        )
    },
})

export const { actions: articleRecommendationsActions } =
    articleRecommendationsSlice
export const { reducer: articleRecommendationsReducer } =
    articleRecommendationsSlice
