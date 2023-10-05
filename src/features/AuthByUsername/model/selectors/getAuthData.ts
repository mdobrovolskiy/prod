import { type StateSchema } from 'app/providers/StoreProvider/types/StateSchema'

export const authErrorSelector = (state: StateSchema) =>
    state?.authReducer?.error
export const authIsLoadingSelector = (state: StateSchema) =>
    state?.authReducer?.isLoading

export const userIdSelector = (state: StateSchema) =>
    state?.userReducer?.authData?.id
