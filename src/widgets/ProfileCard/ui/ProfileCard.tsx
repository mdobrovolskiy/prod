import { type FC } from 'react'
import styles from './ProfileCard.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ThemeButton } from 'widgets/Button/ui/Button'
import { type Profile } from 'entities/Profile/model/types/profile'

interface ProfileCardProps {
    className?: string
    data?: Profile
}
export const ProfileCard: FC<ProfileCardProps> = (props) => {
    const { className, data } = props

    return (
        <div className={classNames(styles.ProfileCard, {}, [])}>
            <div className={styles.top}>
                <h2>Profile</h2>
                <div>
                    <Button theme={ThemeButton.MAIN}>Edit</Button>
                </div>
            </div>
            <div>
                <div>Name: {data?.first}</div>
            </div>
            <div>
                <div>LastName: {data?.lastname}</div>
            </div>
        </div>
    )
}
