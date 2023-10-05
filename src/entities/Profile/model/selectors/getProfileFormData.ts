import { type StateSchema } from 'app/providers/StoreProvider/types/StateSchema'

export const getProfileFormData = (state: StateSchema) =>
    state.profileReducer?.form
