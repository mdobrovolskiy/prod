import { type ArticleListSchema } from './../types/articleListTypes'
import { type PayloadAction, createSlice } from '@reduxjs/toolkit'

import { fetchArticles } from 'entities/Article/ui/ArticleList/model/services/fetchArticles'
import { LOCAL_STORAGE_VIEW_KEY } from 'shared/consts/localStorage'

const initialState: ArticleListSchema = {
    isLoading: false,
    data: undefined,
    error: undefined,
    smallCards: true,
    page: 1,
    limit: 12,
    hasMore: true,
    _inited: false,
}

const articleListSlice = createSlice({
    name: 'articleList',
    initialState,
    reducers: {
        setIsSmallSize(state, action) {
            state.smallCards = action.payload
            localStorage.setItem(LOCAL_STORAGE_VIEW_KEY, action.payload)
        },
        initialSizeCheck(state) {
            const isSmallViewSelected = JSON.parse(
                localStorage.getItem(LOCAL_STORAGE_VIEW_KEY) || ''
            )
            if (isSmallViewSelected === false) {
                state.smallCards = false
                state.limit = 5
            }
            state._inited = true
        },
        setPage(state) {
            state.page = state.page + 1
        },
        resetData(state) {
            state.data = undefined
            state.error = undefined
            state.hasMore = true
            state.page = 1
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
            if (action.payload.length < state.limit) {
                state.hasMore = false
            }
            if (state.data) {
                state.data = [...state.data, ...action.payload]
            } else {
                state.data = action.payload
            }
        })
    },
})

export const { actions: articleListActions } = articleListSlice
export const { reducer: articleListReducer } = articleListSlice
