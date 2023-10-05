import { createAsyncThunk } from '@reduxjs/toolkit'
import axios, { type AxiosInstance } from 'axios'
import { userActions } from 'entities/User/slice/userSlice'
import { LOCAL_STORAGE_AUTH_KEY } from 'shared/consts/localStorage'
import { type Profile } from '../../types/profile'

export const fetchProfileData = createAsyncThunk(
    'profile/fetchProfileData',
    async (_, { extra, dispatch }) => {
        // @ts-expect-error
        const response = await extra.api.get('/profile')
        return response.data
    }
)
