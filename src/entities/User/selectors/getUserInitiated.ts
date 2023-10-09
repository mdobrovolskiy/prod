import { type StateSchema } from 'app/providers/StoreProvider/types/StateSchema'

export const getUserInitiated = (state: StateSchema) =>
    state.userReducer.initiated
