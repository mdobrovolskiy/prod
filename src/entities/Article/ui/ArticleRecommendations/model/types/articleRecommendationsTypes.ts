import { type Article } from 'entities/Article/model/types/Article'
export interface articleRecommendationsTypes {
    data?: Article[]
    isLoading: boolean
    error?: string | string[]
}
