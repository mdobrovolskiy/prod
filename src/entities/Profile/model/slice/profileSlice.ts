import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { fetchProfileData } from 'entities/Profile/model/services/fetchProfileData/fetchProfileData'
import { type ProfileSchema } from 'entities/Profile/model/types/profile'
import { updateProfileData } from 'entities/Profile/model/services/updateProfileData/updateProfileData'
import { type ProfileError } from '../validate/ProfileDataValidator'

const initialState: ProfileSchema = {
    readonly: true,
    isLoading: false,
    error: undefined,
    data: undefined,
    form: undefined,
}

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        handleReadonly(state, action: PayloadAction<boolean>) {
            state.readonly = action.payload
        },
        onProfileChange(state, action) {
            state.form = { ...state.form, ...action.payload }
        },
        onProfileChangeCancel(state) {
            state.form = state.data
            state.error = undefined
        },
    },
    extraReducers(builder) {
        builder.addCase(fetchProfileData.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchProfileData.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = undefined
            state.data = action.payload[0]
            state.form = action.payload[0]
        })
        builder.addCase(fetchProfileData.rejected, (state) => {
            state.isLoading = false
            state.error = 'Something went wrong'
        })
        builder.addCase(updateProfileData.pending, (state) => {
            state.isLoading = true
            state.error = undefined
        })
        builder.addCase(updateProfileData.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload as ProfileError[]
        })
        builder.addCase(updateProfileData.fulfilled, (state) => {
            state.isLoading = false
            state.error = undefined
            state.data = state.form
            state.readonly = true
        })
    },
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
