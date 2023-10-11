import { type Comment } from 'entities/Comment/model/types/Comment'

export interface ArticleCommentsSlice {
    isLoading: boolean
    error?: string | string[]
    data?: Comment[]
}
