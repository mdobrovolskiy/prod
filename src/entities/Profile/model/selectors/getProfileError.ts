import { type StateSchema } from 'app/providers/StoreProvider/types/StateSchema'

export const getProfileError = (state: StateSchema) =>
    state.profileReducer?.error
