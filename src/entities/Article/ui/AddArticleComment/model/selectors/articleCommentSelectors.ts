import { type StateSchema } from 'app/providers/StoreProvider/types/StateSchema'
export const getArticleCommentText = (state: StateSchema) =>
    state.addArticleCommentReducer?.text
export const getArticleCommentLoading = (state: StateSchema) =>
    state.addArticleCommentReducer?.isLoading
export const getArticleCommentError = (state: StateSchema) =>
    state.addArticleCommentReducer?.error
