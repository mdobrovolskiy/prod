import { createSlice } from '@reduxjs/toolkit'
import { fetchProfileData } from 'entities/Profile/model/services/fetchProfileData/fetchProfileData'
import { type ProfileSchema } from 'entities/Profile/model/types/profile'

const initialState: ProfileSchema = {
    readonly: true,
    isLoading: false,
    error: undefined,
    data: undefined,
}

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchProfileData.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchProfileData.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = undefined
            state.data = action.payload
        })
        builder.addCase(fetchProfileData.rejected, (state) => {
            state.isLoading = false
            state.error = 'Something went wrong'
        })
    },
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
