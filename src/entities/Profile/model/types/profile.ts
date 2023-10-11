import { type Currency } from 'entities/Currency/model/types/Currency'
import { type Country } from 'entities/Country/model/types/Country'
import { type ProfileError } from '../validate/ProfileDataValidator'

export interface User {
    first: string
    lastname: string
    age: number
    currency: Currency
    country: Country
    city: string
    username: string
    avatar: string
    id: string | number
}

export interface ProfileSchema {
    form?: User
    data?: User
    isLoading: boolean
    error?: string | ProfileError[]
    readonly: boolean
}
