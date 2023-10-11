import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchProfileData = createAsyncThunk(
    'profile/fetchProfileData',
    async (username: string, { extra, dispatch }) => {
        // @ts-expect-error
        const response = await extra.api.get('/users', {
            params: {
                username,
            },
        })

        return response.data
    }
)
