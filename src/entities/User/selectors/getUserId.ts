import { type StateSchema } from 'app/providers/StoreProvider/types/StateSchema'

export const getUserId = (state: StateSchema) => state.userReducer.authData.id
