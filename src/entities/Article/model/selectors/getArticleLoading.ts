import { type StateSchema } from 'app/providers/StoreProvider/types/StateSchema'

export const getArticleLoading = (state: StateSchema) =>
    state.articleDetailsReducer?.isLoading
