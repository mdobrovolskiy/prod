import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { userActions } from 'entities/User/slice/userSlice'
import { LOCAL_STORAGE_AUTH_KEY } from 'shared/consts/localStorage'
interface loginProps {
    username: string
    password: string
}
export const loginThunk = createAsyncThunk(
    'loginThunk',
    async (userData: loginProps, thunkApi) => {
        const response = await axios.post(
            'http://localhost:8000/login',
            userData
        )
        if (response) {
            localStorage.setItem(
                LOCAL_STORAGE_AUTH_KEY,
                JSON.stringify(response.data)
            )
            thunkApi.dispatch(userActions.login(response.data))
        }
    }
)
