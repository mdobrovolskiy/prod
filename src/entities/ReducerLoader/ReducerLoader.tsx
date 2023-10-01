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
}
export const ReducerLoader = ({ children, reducers }: ReducerLoaderProps) => {
    const dispatch = useDispatch()
    const store = useStore() as ReduxStoreWithManager
    useEffect(() => {
        const reducersList = Object.entries(reducers)
        reducersList.forEach(([key, reducer]: LoaderReducersList) => {
            store.reducerManager.add(key, reducer)
            dispatch({ type: `@added ${key}` })
        })
        return () => {
            reducersList.forEach(([key, reducer]: LoaderReducersList) => {
                store.reducerManager.remove(key)
                dispatch({ type: `@removed ${key}` })
            })
        }
    }, [store])
    return <>{children}</>
}
