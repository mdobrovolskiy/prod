import { createSlice } from '@reduxjs/toolkit'
import { type authSchema } from '../types/authSchema'
import { loginThunk } from '../services/loginThunk'

const initialState: authSchema = {
    isLoading: false,
    error: '',
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(loginThunk.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(loginThunk.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = ''
        })
        builder.addCase(loginThunk.rejected, (state) => {
            state.isLoading = false
            state.error = 'Something went wrong'
        })
    },
})

export const { actions: authActions } = authSlice
export const { reducer: authReducer } = authSlice
