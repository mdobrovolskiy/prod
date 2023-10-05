import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchProfileData = createAsyncThunk(
    'profile/fetchProfileData',
    async (_, { extra, dispatch }) => {
        // @ts-expect-error
        const response = await extra.api.get('/profile')

        return response.data
    }
)
