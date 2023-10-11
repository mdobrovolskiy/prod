import { type StateSchema } from 'app/providers/StoreProvider/types/StateSchema'

export const getArticleId = (state: StateSchema) =>
    state.articleDetailsReducer?.data?.id
