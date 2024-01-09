import { ReactNode, useContext } from 'react'
import { MenuLabel, MenuLink } from './menu-item.styles'
import { useLocation } from 'react-router-dom'
import { SideMenuContext } from '@contexts/side-menu.context'

type MenuItemData = {
  label: string
  href: string
  isTitle?: boolean
}

export type MenuItemProps = {
  data: MenuItemData
  icon?: ReactNode
}

export const MenuItem: React.FC<MenuItemProps> = ({
  data: { label, href, isTitle = false },
  icon
}) => {
  const location = useLocation()
  const { isOpen } = useContext(SideMenuContext)

  return (
    <MenuLink to={href} $isSelected={location.pathname == href && true} $isOpen={isOpen}>
      {icon}
      <MenuLabel $isTitle={isTitle}>{label}</MenuLabel>
    </MenuLink>
  )
}
