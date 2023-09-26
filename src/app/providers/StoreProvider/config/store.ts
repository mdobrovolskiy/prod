import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from 'features/AuthByUsername/model/slice/authSlice'
import { userReducer } from 'entities/User/slice/userSlice'
export function createReduxStore() {
    return configureStore({
        reducer: { authReducer, userReducer },
        devTools: __ISDEV__,
    })
}
