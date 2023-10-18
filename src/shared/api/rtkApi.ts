import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseURL } from 'shared/api/api'
import { LOCAL_STORAGE_AUTH_KEY } from 'shared/consts/localStorage'

// Define a service using a base URL and expected endpoints
export const rtkApi = createApi({
    reducerPath: 'rtkApi',
    baseQuery: fetchBaseQuery({
        baseUrl: baseURL,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem(LOCAL_STORAGE_AUTH_KEY) || ''
            if (token) {
                headers.set('Authorization', token)
            }
            return headers
        },
    }),
    endpoints: (builder) => ({}),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
// export const { useGetPokemonByNameQuery } = pokemonApi
