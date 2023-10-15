import { createSlice } from '@reduxjs/toolkit'
import {
    ArticleOrder,
    type ArticleFiltersProps,
    ArticleSort,
} from '../types/articleFilters'

const initialState: ArticleFiltersProps = {
    order: ArticleOrder.DESC,
    sort: ArticleSort.VIEW,
    search: '',
}

const articleFilters = createSlice({
    name: 'articleDetails',
    initialState,
    reducers: {
        setSort(state, action) {
            state.sort = action.payload
        },
        setOrder(state, action) {
            state.order = action.payload
        },
        setSearch(state, action) {
            state.search = action.payload
        },
    },
})

export const { actions: articleFiltersActions } = articleFilters
export const { reducer: articleFiltersReducer } = articleFilters
