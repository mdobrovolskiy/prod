import { type authSchema } from '../../../../features/AuthByUsername/model/types/authSchema'
import { type UserSchema } from '../../../../entities/User/types/userTypes'
export interface StateSchema {
    authReducer: authSchema
    userReducer: UserSchema
}
