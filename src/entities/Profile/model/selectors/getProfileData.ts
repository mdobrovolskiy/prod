import { type StateSchema } from 'app/providers/StoreProvider/types/StateSchema'

export const getProfileData = (state: StateSchema) => state.profileReducer?.data
