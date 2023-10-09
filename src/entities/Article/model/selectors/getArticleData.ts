import { type StateSchema } from 'app/providers/StoreProvider/types/StateSchema'

export const getArticleData = (state: StateSchema) =>
    state.articleDetailsReducer?.data
