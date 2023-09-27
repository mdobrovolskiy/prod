import { type authSchema } from '../../../../features/AuthByUsername/model/types/authSchema'
import { type UserSchema } from '../../../../entities/User/types/userTypes'
import { type EnhancedStore } from '@reduxjs/toolkit'
import { type ReducerManager } from '../config/reducerManager'
export interface StateSchema {
    authReducer?: authSchema
    userReducer: UserSchema
}
export type StateSchemaKey = keyof StateSchema

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}
