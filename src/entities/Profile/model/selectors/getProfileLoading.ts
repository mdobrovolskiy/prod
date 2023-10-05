import { type StateSchema } from 'app/providers/StoreProvider/types/StateSchema'

export const getProfileLoading = (state: StateSchema) =>
    state.profileReducer?.isLoading
