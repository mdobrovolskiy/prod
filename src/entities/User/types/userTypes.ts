export interface UserSchema {
    authData: User
    initiated: boolean
}
export interface User {
    username?: string
    id?: string | number
}
