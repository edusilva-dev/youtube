import { useContext } from 'react'
import { SideMenuContainer } from './side-menu.styles'

import { SideMenuContext } from '@contexts/side-menu.context'

import { Opened } from './components/opened'
import { Closed } from './components/closed'

export const SideMenu: React.FC = () => {
  const { isOpen } = useContext(SideMenuContext)

  return <SideMenuContainer $isOpen={isOpen}>{isOpen ? <Opened /> : <Closed />}</SideMenuContainer>
}
