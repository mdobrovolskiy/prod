import { type Article } from './Article'

export interface ArticleDetailsSchema {
    isLoading: boolean
    error?: string
    data?: Article
}
