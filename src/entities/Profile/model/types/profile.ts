import { type Currency } from 'entities/Currency/model/types/Currency'
import { type Country } from 'entities/Country/model/types/Country'

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
    error?: string
    readonly: boolean
}
