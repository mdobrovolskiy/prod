import { type ChangeEvent, type FC } from 'react'
import styles from './ProfileCard.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { type User } from 'entities/Profile/model/types/profile'
import { Loader } from 'widgets/Loader'
import { ProfileItem } from '../ProfileItem/ProfileItem'
import { Avatar } from 'widgets/Avatar/Avatar'
import { countryOptions } from 'entities/Country/model/options/countryOptions'
import { CurrenctSwitch } from 'entities/Currency/ui/CurrencySwitch/CurrenctSwitch'
import { CountrySelect } from 'entities/Country/ui/CountrySelect'
import { type ProfileError } from 'entities/Profile/model/validate/ProfileDataValidator'

interface ProfileCardProps {
    className?: string
    data?: User
    error?: string | ProfileError[]
    readonly?: boolean
    onLastnameChange?: (e: ChangeEvent<HTMLInputElement>) => void
    onFirstnameChange?: (e: ChangeEvent<HTMLInputElement>) => void
    onCityChange?: (e: ChangeEvent<HTMLInputElement>) => void
    onCountryChange?: (e: ChangeEvent<HTMLSelectElement>) => void
    onCurrencyChange?: (e: ChangeEvent<HTMLSelectElement>) => void
    onAgeChange?: (e: ChangeEvent<HTMLInputElement>) => void

    onAvatarChange?: (e: ChangeEvent<HTMLInputElement>) => void

    onUsernameChange?: (e: ChangeEvent<HTMLInputElement>) => void

    isLoading?: boolean
}
export const ProfileCard: FC<ProfileCardProps> = (props) => {
    const {
        className,
        error,
        data,
        readonly,
        onLastnameChange,
        onFirstnameChange,
        onCityChange,
        onCountryChange,
        onCurrencyChange,
        onAgeChange,
        onAvatarChange,
        onUsernameChange,
        isLoading,
    } = props

    if (isLoading) {
        return (
            <div className={classNames(styles.Loader, {}, [])}>
                <Loader />
            </div>
        )
    }

    return (
        <div className={classNames(styles.ProfileCard, {}, [])}>
            {error &&
                (Array.isArray(error) ? (
                    error.map((err) => <h2 key={err}>{err}</h2>)
                ) : (
                    <h1>{error}</h1>
                ))}
            <div className={styles.avatar}>
                <Avatar src={data?.avatar} alt="Avatar" size={100} />
            </div>
            <ProfileItem
                name="Firstname"
                value={data?.first}
                readonly={readonly}
                onChange={onFirstnameChange}
            />
            <ProfileItem
                name="Lastname"
                value={data?.lastname}
                readonly={readonly}
                onChange={onLastnameChange}
            />
            <ProfileItem
                name="City"
                value={data?.city}
                readonly={readonly}
                onChange={onCityChange}
            />

            <ProfileItem
                name="Age"
                value={data?.age}
                readonly={readonly}
                onChange={onAgeChange}
            />
            <ProfileItem
                name="Avatar"
                value={data?.avatar}
                readonly={readonly}
                onChange={onAvatarChange}
            />
            <ProfileItem
                name="Username"
                value={data?.username}
                readonly={readonly}
                onChange={onUsernameChange}
            />
            <div>
                Country:
                <CountrySelect
                    className={styles.curr}
                    value={data?.country}
                    onChange={onCountryChange}
                    readonly={readonly}
                />
            </div>
            <div>
                Currency:
                <CurrenctSwitch
                    className={styles.curr}
                    value={data?.currency}
                    onChange={onCurrencyChange}
                    readonly={readonly}
                />
            </div>
        </div>
    )
}
