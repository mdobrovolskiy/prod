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
    useEffect(() => {
        const reducersList = Object.entries(reducers)
        reducersList.forEach(([key, reducer]) => {
            store.reducerManager.add(key as StateSchemaKey, reducer)
            dispatch({ type: `@added ${key}` })
        })
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
