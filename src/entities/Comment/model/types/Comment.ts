import { type User } from 'entities/Profile/model/types/profile'
export interface Comment {
    id: string | number
    text: string
    articleId: string | number
    userId: string | number
    user?: User
}
