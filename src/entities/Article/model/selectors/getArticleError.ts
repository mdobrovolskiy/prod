import { type StateSchema } from 'app/providers/StoreProvider/types/StateSchema'

export const getArticleError = (state: StateSchema) =>
    state.articleDetailsReducer?.error
