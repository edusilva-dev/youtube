import { ReactNode, useContext } from 'react'
import { Container } from './page.style'

import { SideMenuContext } from '@contexts/side-menu.context'

import { SIZES } from '@styles/sizes'

export const Page: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { isOpen } = useContext(SideMenuContext)

  return (
    <Container style={{ marginLeft: isOpen ? SIZES.MENU.OPENED.WIDTH : SIZES.MENU.CLOSED.WIDTH }}>
      {children}
    </Container>
  )
}
