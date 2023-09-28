import { type StateSchema } from 'app/providers/StoreProvider/types/StateSchema'

export const authDataSelector = (state: StateSchema) => state?.authReducer

export const userIdSelector = (state: StateSchema) =>
    state?.userReducer.authData.id
