import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type User, type UserSchema } from '../types/userTypes'
import { LOCAL_STORAGE_AUTH_KEY } from '../../../shared/consts/localStorage'

const initialState: UserSchema = {
    authData: {},
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
        },
        logout(state) {
            state.authData = {}
            localStorage.removeItem(LOCAL_STORAGE_AUTH_KEY)
        },
    },
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
