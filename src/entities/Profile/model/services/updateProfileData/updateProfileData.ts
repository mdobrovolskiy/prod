import { createAsyncThunk } from '@reduxjs/toolkit'
import axios, { AxiosError } from 'axios'
import { getProfileFormData } from 'entities/Profile/model/selectors/getProfileFormData'
import { getUserId } from 'entities/User/selectors/getUserId'
import {
    type ProfileError,
    profileDataValidator,
} from 'entities/Profile/model/validate/ProfileDataValidator'

export const updateProfileData = createAsyncThunk(
    'profile/updateProfileData',
    async (_, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi
        // @ts-expect-error
        const data = getProfileFormData(getState())
        console.log(2131231)
        let errors: ProfileError[] = []

        const userId = getUserId(getState() as any)

        if (data) {
            errors = profileDataValidator(data)
        }
        if (errors.length) {
            return rejectWithValue(errors)
        }

        try {
            // @ts-expect-error
            const res = await extra.api.put(`/users/${userId}`, data)
            return res.data
        } catch (err) {
            if (axios.isAxiosError(err)) {
                return rejectWithValue(err.message)
            } else {
                return rejectWithValue('Unexpected error')
            }
        }
    }
)
