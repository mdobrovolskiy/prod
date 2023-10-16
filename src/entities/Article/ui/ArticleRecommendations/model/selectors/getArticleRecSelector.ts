import { type StateSchema } from 'app/providers/StoreProvider/types/StateSchema'
export const getRecommendationsData = (state: StateSchema) =>
    state.articleRecommendationsReducer?.data

export const getRecommendationsIsLoading = (state: StateSchema) =>
    state.articleRecommendationsReducer?.isLoading

export const getRecommendationsError = (state: StateSchema) =>
    state.articleRecommendationsReducer?.error
