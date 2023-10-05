import { Provider } from 'react-redux'
import { createReduxStore } from '../config/store'
import { type FC } from 'react'
import { type StateSchema } from '../types/StateSchema'
import { useNavigate } from 'react-router-dom'
export interface StoreProviderProps {
    initialState?: StateSchema
}
export const StoreProvider: FC<StoreProviderProps> = ({ children }) => {
    const store = createReduxStore()
    return <Provider store={store}>{children}</Provider>
}
