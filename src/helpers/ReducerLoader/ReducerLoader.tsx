import { type ReactNode, useEffect } from 'react'

import { useDispatch, useStore } from 'react-redux'
import { type Reducer } from '@reduxjs/toolkit'

import {
    type StateSchemaKey,
    type ReduxStoreWithManager,
} from 'app/providers/StoreProvider/types/StateSchema'

export type LoaderReducers = {
    [name in StateSchemaKey]?: Reducer
}

type LoaderReducersList = [StateSchemaKey, Reducer]

interface ReducerLoaderProps {
    children?: ReactNode
    reducers: LoaderReducers
    removeAfterUnmount?: boolean
}
export const ReducerLoader = ({
    children,
    reducers,
    removeAfterUnmount,
}: ReducerLoaderProps) => {
    const dispatch = useDispatch()
    const store = useStore() as ReduxStoreWithManager
    const storeState = store.getState()

    const stateArr = Object.keys(storeState)

    const reducerProps = Object.keys(reducers)

    const checkIfNeedAddReducer = () => {
        for (let i = 0; i < reducerProps.length; i++) {
            if (!stateArr.includes(reducerProps[i])) {
                return true
            }
        }
        return false
    }

    useEffect(() => {
        const reducersList = Object.entries(reducers)
        if (checkIfNeedAddReducer()) {
            reducersList.forEach(([key, reducer]) => {
                store.reducerManager.add(key as StateSchemaKey, reducer)
                dispatch({ type: `@added ${key}` })
            })
        }

        return () => {
            if (removeAfterUnmount) {
                reducersList.forEach(([key, reducer]) => {
                    store.reducerManager.remove(key as StateSchemaKey)
                    dispatch({ type: `@removed ${key}` })
                })
            }
        }
    }, [store])
    return <>{children}</>
}
