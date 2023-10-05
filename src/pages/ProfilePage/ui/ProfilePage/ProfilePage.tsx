import { useEffect } from 'react'
import styles from './ProfilePage.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useDispatch } from 'react-redux'
import { fetchProfileData } from '../../../../entities/Profile/model/services/fetchProfileData/fetchProfileData'
import { ReducerLoader } from '../../../../helpers/ReducerLoader/ReducerLoader'
import { profileReducer } from '../../../../entities/Profile/model/slice/profileSlice'
import { ProfilePageHeader } from 'pages/ProfilePage/ui/ProfilePageHeader/ProfilePageHeader'

const reducers = {
    profileReducer,
}

const ProfilePage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProfileData())
    }, [])

    return (
        <ReducerLoader reducers={reducers}>
            <div className={classNames(styles.ProfilePage, {}, [])}>
                <ProfilePageHeader />
            </div>
        </ReducerLoader>
    )
}
export default ProfilePage
