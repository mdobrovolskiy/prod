import { configureStore } from '@reduxjs/toolkit'
import { type StateSchema } from '../types/StateSchema'
import { counterReducer } from 'entities/Counter/model/slice/CounterSlice'
export function createReduxStore (initialState?: StateSchema) {
    return configureStore({
        reducer: { counterReducer },
        devTools: __ISDEV__,
        preloadedState: initialState

    })
}
