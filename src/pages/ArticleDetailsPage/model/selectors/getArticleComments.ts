import { type StateSchema } from 'app/providers/StoreProvider/types/StateSchema'

export const getArticleComments = (state: StateSchema) =>
    state.articleCommentsReducer?.data
