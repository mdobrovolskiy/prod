import { type Article } from 'entities/Article/model/types/Article'

export interface ArticleListSchema {
    isLoading: boolean
    error?: string
    data?: Article[]
    smallCards: boolean
}
