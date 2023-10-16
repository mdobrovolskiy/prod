import { useEffect } from 'react'
import styles from './ProfilePage.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useDispatch } from 'react-redux'
import { fetchProfileData } from '../../../../entities/Profile/model/services/fetchProfileData/fetchProfileData'
import { ReducerLoader } from '../../../../helpers/ReducerLoader/ReducerLoader'
import { profileReducer } from '../../../../entities/Profile/model/slice/profileSlice'
import { ProfilePageHeader } from 'pages/ProfilePage/ui/ProfilePageHeader/ProfilePageHeader'
import { useParams } from 'react-router-dom'
import { Page } from 'shared/Page/Page'
import { Animation } from 'widgets/Animation/Animation'

const reducers = {
    profileReducer,
}

const ProfilePage = () => {
    const dispatch = useDispatch()
    const { username } = useParams()
    useEffect(() => {
        if (username) {
            dispatch(fetchProfileData(username))
        }
    }, [username])

    return (
        <Page>
            <ReducerLoader reducers={reducers}>
                <div className={classNames(styles.ProfilePage, {}, [])}>
                    <ProfilePageHeader />
                </div>
            </ReducerLoader>
        </Page>
    )
}
export default ProfilePage
