import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit'
import { authReducer } from 'features/AuthByUsername/model/slice/authSlice'
import { userReducer } from 'entities/User/slice/userSlice'
import { type StateSchema } from '../types/StateSchema'
import { createReducerManager } from './reducerManager'

export function createReduxStore() {
    const rootReducers: ReducersMapObject<StateSchema> = {
        userReducer,
    }

    const reducerManager = createReducerManager(rootReducers)

    const store = configureStore({
        reducer: reducerManager.reduce,
        devTools: __ISDEV__,
    })
    // @ts-expect-error
    store.reducerManager = reducerManager

    return store
}
