import { createAsyncThunk } from '@reduxjs/toolkit'
import { type AxiosInstance } from 'axios'
import { userActions } from 'entities/User/slice/userSlice'
import { LOCAL_STORAGE_AUTH_KEY } from 'shared/consts/localStorage'
interface loginProps {
    username: string
    password: string
}
export interface ThunkApiArg {
    api: AxiosInstance
}
export const loginThunk = createAsyncThunk(
    'loginThunk',
    async (userData: loginProps, { extra, dispatch }) => {
        // @ts-expect-error
        const response = await extra.api.post(
            'http://localhost:8000/login',
            userData
        )
        if (response) {
            localStorage.setItem(
                LOCAL_STORAGE_AUTH_KEY,
                JSON.stringify(response.data)
            )

            dispatch(userActions.login(response.data))
        }
    }
)
