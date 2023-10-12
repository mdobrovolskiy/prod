import { type StateSchema } from 'app/providers/StoreProvider/types/StateSchema'

export const getArticleListData = (state: StateSchema) =>
    state.articleListReducer?.data

export const getArticleListLoading = (state: StateSchema) =>
    state.articleListReducer?.isLoading

export const getArticleListError = (state: StateSchema) =>
    state.articleListReducer?.error

export const getArticleListCardSize = (state: StateSchema) =>
    state.articleListReducer?.smallCards

export const getArticleListPageNum = (state: StateSchema) =>
    state.articleListReducer?.page

export const getArticleListLimit = (state: StateSchema) =>
    state.articleListReducer?.limit

export const getArticleListHasMore = (state: StateSchema) =>
    state.articleListReducer?.hasMore
export const getArticleListInited = (state: StateSchema) =>
    state.articleListReducer?._inited
