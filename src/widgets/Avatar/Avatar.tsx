import { memo, type CSSProperties, type FC } from 'react'
import cls from './Avatar.module.scss'
interface AvatarProps {
    className?: string
    src?: string
    alt: string
    size?: number
}
const Avatar_: FC<AvatarProps> = (props) => {
    const { className, alt, src, size } = props

    const styles: CSSProperties = {
        height: size || 50,
        width: size || 50,
    }

    return <img className={cls.main} style={styles} src={src} alt={alt} />
}
export const Avatar = memo(Avatar_)
