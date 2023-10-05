import { createAsyncThunk } from '@reduxjs/toolkit'
import { type Profile } from 'entities/Profile/model/types/profile'

export const updateProfileData = createAsyncThunk(
    'profile/updateProfileData',
    async (data: Profile, thunkApi) => {
        const { extra, dispatch } = thunkApi
        // @ts-expect-error
        const res = await extra.api.put('/profile', data)
        return res.data
    }
)
