import { useEffect } from 'react'
import styles from './ProfilePage.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProfileData } from '../../../entities/Profile/model/services/fetchProfileData/fetchProfileData'
import { ReducerLoader } from '../../../helpers/ReducerLoader/ReducerLoader'
import { profileReducer } from '../model/slice/profileSlice'
import { ProfileCard } from 'widgets/ProfileCard'
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData'

const reducers = {
    profileReducer,
}

const ProfilePage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProfileData())
    }, [])
    const clientData = useSelector(getProfileData)
    return (
        <ReducerLoader reducers={reducers}>
            <div className={classNames(styles.ProfilePage, {}, [])}>
                <ProfileCard data={clientData} />
            </div>
        </ReducerLoader>
    )
}
export default ProfilePage
