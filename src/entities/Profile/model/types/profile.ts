import { type Currency } from 'entities/Currency/model/types/Currency'
import { type Country } from 'entities/Country/model/types/Country'
import { type ProfileError } from '../validate/ProfileDataValidator'

export interface Profile {
    first: string
    lastname: string
    age: number
    currency: Currency
    country: Country
    city: string
    username: string
    avatar: string
}

export interface ProfileSchema {
    form?: Profile
    data?: Profile
    isLoading: boolean
    error?: string | ProfileError[]
    readonly: boolean
}
