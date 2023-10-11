import { type User } from 'entities/Profile/model/types/profile'
export enum ProfileError {
    INVALID_AGE = 'INVALID_AGE',
    INVALID_CITY = 'INVALID_CITY',
    INVALID_FIRSTNAME = 'INVALID_FIRSTNAME',
    INVALID_LASTNAME = 'INVALID_LASTNAME',
    INVALID_USERNAME = 'INVALID_USERNAME',
    SERVER_ERROR = 'SERVER_ERROR',
}
export const profileDataValidator = (data: User) => {
    const { age, city, first, lastname, username } = data
    const errors = []
    console.log(age)
    if (!Number.isInteger(+age) || !age.toString().length) {
        errors.push(ProfileError.INVALID_AGE)
    }
    if (!city.length) {
        errors.push(ProfileError.INVALID_CITY)
    }
    if (!first.length) {
        errors.push(ProfileError.INVALID_FIRSTNAME)
    }
    if (!lastname.length) {
        errors.push(ProfileError.INVALID_LASTNAME)
    }
    if (!username.length) {
        errors.push(ProfileError.INVALID_USERNAME)
    }
    return errors
}
