import axios from 'axios'
import { LOCAL_STORAGE_AUTH_KEY } from '../consts/localStorage'

export const baseURL = 'http://localhost:8000'

export const $api = axios.create({
    baseURL,
    headers: {
        authorization: localStorage.getItem(LOCAL_STORAGE_AUTH_KEY),
    },
})
