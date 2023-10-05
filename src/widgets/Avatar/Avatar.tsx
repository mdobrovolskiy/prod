import { type CSSProperties, type FC } from 'react'
import cls from './Avatar.module.scss'
interface AvatarProps {
    className?: string
    src?: string
    alt: string
    size?: number
}
export const Avatar: FC<AvatarProps> = (props) => {
    const { className, alt, src, size } = props

    const styles: CSSProperties = {
        height: size || 50,
        width: size || 50,
    }

    return <img className={cls.main} style={styles} src={src} alt={alt} />
}
