import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type UserSchema } from '../types/userTypes'
import { type User } from 'entities/Profile/model/types/profile'
import { LOCAL_STORAGE_AUTH_KEY } from '../../../shared/consts/localStorage'

const initialState: UserSchema = {
    authData: undefined,
    initiated: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login(state, action: PayloadAction<User>) {
            state.authData = action.payload
        },
        initialLoginCheck(state) {
            const localAuthData = localStorage.getItem(LOCAL_STORAGE_AUTH_KEY)
            let parsedAuthData
            if (typeof localAuthData === 'string') {
                parsedAuthData = JSON.parse(localAuthData)
            }
            if (parsedAuthData) {
                state.authData = parsedAuthData
            }
            state.initiated = true
        },
        logout(state) {
            state.authData = undefined
            localStorage.removeItem(LOCAL_STORAGE_AUTH_KEY)
        },
    },
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
