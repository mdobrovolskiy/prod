import {
    type ReducersMapObject,
    combineReducers,
    type AnyAction,
    type Reducer,
    type CombinedState,
} from '@reduxjs/toolkit'
import { type StateSchemaKey, type StateSchema } from '../types/StateSchema'

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>
    reduce: (
        state: StateSchema,
        action: AnyAction
    ) => CombinedState<StateSchema>
    add: (key: StateSchemaKey, reducer: Reducer) => void
    remove: (key: StateSchemaKey) => void
}

export function createReducerManager(
    initialReducers: ReducersMapObject<StateSchema>
): ReducerManager {
    const reducers = { ...initialReducers }

    let combinedReducer = combineReducers(reducers)

    let keysToRemove: StateSchemaKey[] = []

    return {
        getReducerMap: () => reducers,

        reduce: (state: StateSchema, action: AnyAction) => {
            if (keysToRemove.length > 0) {
                state = { ...state }
                keysToRemove.forEach((key) => {
                    // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
                    delete state[key]
                })
                keysToRemove = []
            }

            return combinedReducer(state, action)
        },

        add: (key: StateSchemaKey, reducer: Reducer) => {
            if (!key || reducers[key]) {
                return
            }

            reducers[key] = reducer

            combinedReducer = combineReducers(reducers)
        },

        // Removes a reducer with the specified key
        remove: (key: StateSchemaKey) => {
            if (!key || !reducers[key]) {
                return
            }

            // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
            delete reducers[key]

            keysToRemove.push(key)

            combinedReducer = combineReducers(reducers)
        },
    }
}
