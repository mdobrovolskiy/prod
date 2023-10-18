import axios from 'axios'
import { LOCAL_STORAGE_AUTH_KEY } from '../consts/localStorage'

export const baseURL = 'http://localhost:8000'

export const $api = axios.create({
    baseURL,
})
$api.interceptors.request.use((config) => {
    if (config.headers) {
        config.headers.Authorization = localStorage.getItem(
            LOCAL_STORAGE_AUTH_KEY
        )
    }
    return config
})
