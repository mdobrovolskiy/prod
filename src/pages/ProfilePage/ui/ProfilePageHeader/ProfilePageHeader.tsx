import {
    useCallback,
    type ChangeEvent,
    type KeyboardEvent,
    useEffect,
} from 'react'
import styles from './ProfilePageHeader.module.scss'
import { Button } from 'widgets/Button'
import { ThemeButton } from 'widgets/Button/ui/Button'
import { useSelector } from 'react-redux'
import { ProfileCard } from 'widgets/ProfileCard'
import { getProfileReadonly } from 'entities/Profile/model/selectors/getProfileReadonly'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { profileActions } from 'entities/Profile/model/slice/profileSlice'
import { getProfileLoading } from 'entities/Profile/model/selectors/getProfileLoading'
import { getProfileFormData } from 'entities/Profile/model/selectors/getProfileFormData'
import { updateProfileData } from 'entities/Profile/model/services/updateProfileData/updateProfileData'
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError'

export const ProfilePageHeader = () => {
    const clientData = useSelector(getProfileFormData)

    const readonly = useSelector(getProfileReadonly)

    const isLoading = useSelector(getProfileLoading)

    const error = useSelector(getProfileError)

    const dispatch = useAppDispatch()

    const openEdit = useCallback(() => {
        dispatch(profileActions.handleReadonly(false))
    }, [dispatch])

    const handleConfirmEdit = useCallback(() => {
        if (clientData) {
            dispatch(updateProfileData())
        }
    }, [clientData, dispatch])

    const handleCancelEdit = useCallback(() => {
        dispatch(profileActions.handleReadonly(true))
        dispatch(profileActions.onProfileChangeCancel())
    }, [dispatch])

    const onFirstnameChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(profileActions.onProfileChange({ first: e.target.value }))
        },
        [dispatch]
    )

    const onCityChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(profileActions.onProfileChange({ city: e.target.value }))
        },
        [dispatch]
    )
    const onLastnameChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                profileActions.onProfileChange({ lastname: e.target.value })
            )
        },
        [dispatch]
    )
    const onAgeChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(profileActions.onProfileChange({ age: e.target.value }))
        },
        [dispatch]
    )
    const onUsernameChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                profileActions.onProfileChange({ username: e.target.value })
            )
        },
        [dispatch]
    )
    const onAvatarChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(profileActions.onProfileChange({ avatar: e.target.value }))
        },
        [dispatch]
    )
    const onCountryChange = useCallback(
        (e: ChangeEvent<HTMLSelectElement>) => {
            dispatch(
                profileActions.onProfileChange({ country: e.target.value })
            )
        },
        [dispatch]
    )
    const onCurrencyChange = useCallback(
        (e: ChangeEvent<HTMLSelectElement>) => {
            dispatch(
                profileActions.onProfileChange({ currency: e.target.value })
            )
        },
        [dispatch]
    )

    const onKeyDown = (e: KeyboardEvent) => {
        const { key } = e
        if (key === 'Enter') {
            handleConfirmEdit()
        } else if (key === 'Escape') {
            handleCancelEdit()
        }
    }
    useEffect(() => {
        if (!readonly) {
            document.addEventListener('keydown', (e) => {
                onKeyDown(e as any)
            })
        }
        return () => {
            document.removeEventListener('keydown', (e) => {
                onKeyDown(e as any)
            })
        }
    }, [readonly])

    return (
        <>
            <div className={styles.top}>
                <h2>Profile</h2>
                {readonly ? (
                    <Button
                        disabled={isLoading}
                        onClick={openEdit}
                        theme={ThemeButton.MAIN}
                    >
                        Edit
                    </Button>
                ) : (
                    <div className={styles.buttons}>
                        <Button
                            disabled={isLoading}
                            className={styles.cancel}
                            onClick={handleCancelEdit}
                            theme={ThemeButton.MAIN}
                        >
                            Cancel
                        </Button>
                        <Button
                            disabled={isLoading}
                            onClick={handleConfirmEdit}
                            theme={ThemeButton.MAIN}
                        >
                            Confirm
                        </Button>
                    </div>
                )}
            </div>
            <ProfileCard
                error={error}
                isLoading={isLoading}
                data={clientData}
                readonly={readonly}
                onFirstnameChange={onFirstnameChange}
                onLastnameChange={onLastnameChange}
                onCityChange={onCityChange}
                onCountryChange={onCountryChange}
                onCurrencyChange={onCurrencyChange}
                onAgeChange={onAgeChange}
                onAvatarChange={onAvatarChange}
                onUsernameChange={onUsernameChange}
            />
        </>
    )
}
