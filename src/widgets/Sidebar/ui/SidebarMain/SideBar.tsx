import { FC, useState } from 'react'
import styles from './SideBar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'widgets/Button'
interface SideBarProps {
  className?: string
}
const SideBar: FC<SideBarProps> = (props) => {
  const { className } = props
  const [collapsed, setCollapsed] = useState(false)
  return (
    <div
      className={classNames(styles.SideBar, { collapsed: collapsed }, [
        className,
      ])}
    >
      <Button onClick={() => setCollapsed((state) => !state)}>
        ASASFUASDGFASUD
      </Button>
    </div>
  )
}

export default SideBar
