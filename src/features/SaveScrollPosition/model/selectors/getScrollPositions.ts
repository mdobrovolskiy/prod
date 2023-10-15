import { type StateSchema } from 'app/providers/StoreProvider/types/StateSchema'
export const getScrollPositions = (state: StateSchema) =>
    state.saveScrollPositionReducer
