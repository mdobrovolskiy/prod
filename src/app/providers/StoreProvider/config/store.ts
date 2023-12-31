import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit'
import { authReducer } from 'features/AuthByUsername/model/slice/authSlice'
import { userReducer } from 'entities/User/slice/userSlice'
import { type StateSchema } from '../types/StateSchema'
import { createReducerManager } from './reducerManager'
import { $api } from 'shared/api/api'
import { rtkApi } from 'shared/api/rtkApi'

export function createReduxStore() {
    const rootReducers: ReducersMapObject = {
        userReducer,
        [rtkApi.reducerPath]: rtkApi.reducer,
    }

    const reducerManager = createReducerManager(rootReducers)

    const store = configureStore({
        // @ts-expect-error
        reducer: reducerManager.reduce as ReducersMapObject<StateSchema>,
        devTools: __ISDEV__,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: {
                        api: $api,
                    },
                },
            }).concat(rtkApi.middleware),
    })
    // @ts-expect-error
    store.reducerManager = reducerManager

    return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
