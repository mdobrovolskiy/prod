import { type User } from 'entities/Profile/model/types/profile'

export interface UserSchema {
    authData?: User
    initiated: boolean
}
