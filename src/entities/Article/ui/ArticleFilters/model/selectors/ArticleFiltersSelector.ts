import { type StateSchema } from 'app/providers/StoreProvider/types/StateSchema'
export const getArticleSort = (state: StateSchema) =>
    state.articleFiltersReducer?.sort
export const getArticleOrder = (state: StateSchema) =>
    state.articleFiltersReducer?.order
export const getArticleSearch = (state: StateSchema) =>
    state.articleFiltersReducer?.search
