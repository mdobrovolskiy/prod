import { type StateSchema } from 'app/providers/StoreProvider/types/StateSchema'

export const getProfileReadonly = (state: StateSchema) =>
    state.profileReducer?.readonly
