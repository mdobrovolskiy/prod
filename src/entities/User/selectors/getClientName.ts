import { type StateSchema } from 'app/providers/StoreProvider/types/StateSchema'

export const getClientUsername = (state: StateSchema) =>
    state?.userReducer.authData?.username
