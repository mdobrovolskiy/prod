import { createSlice } from '@reduxjs/toolkit'
import { getParamsValue } from 'shared/lib/hooks/useSearchParams'
import {
    ArticleOrder,
    type ArticleFiltersProps,
    ArticleSort,
} from '../types/articleFilters'

const initialState: ArticleFiltersProps = {
    order: getParamsValue('order') || ArticleOrder.DESC,
    sort: getParamsValue('sort') || ArticleSort.VIEW,
    search: getParamsValue('search') || '',
    type: getParamsValue('type'),
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
        setType(state, action) {
            state.type = action.payload
        },
    },
})

export const { actions: articleFiltersActions } = articleFilters
export const { reducer: articleFiltersReducer } = articleFilters
