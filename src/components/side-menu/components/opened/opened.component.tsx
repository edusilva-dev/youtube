import { useContext } from 'react'
import { MiddleSection, Section, SectionText, SectionTitle } from '../../side-menu.styles'
import { MenuItem } from '../menu-item'
import { LoginButton } from '@components/login-button'

import { AuthContext } from '@contexts/auth.context'

import { MAIN_MENU_ITEMS } from '@constants/menu/main'
import { EXPLORE_MENU_ITEMS } from '@constants/menu/explore'
import { ANONYMOUS_MENU_ITEMS } from '@constants/menu/anonymous'
import { SIGNED_MENU_ITEMS } from '@constants/menu/signed'

export const Opened = () => {
  const { isLogged } = useContext(AuthContext)

  return (
    <>
      <Section>
        {MAIN_MENU_ITEMS.map((menuItem, index) => (
          <MenuItem key={index} data={menuItem.data} icon={menuItem.icon} />
        ))}

        {isLogged && (
          <MiddleSection>
            {SIGNED_MENU_ITEMS.map((menuItem, index) => (
              <MenuItem key={index} data={menuItem.data} icon={menuItem.icon} />
            ))}
          </MiddleSection>
        )}
      </Section>

      {!isLogged && (
        <>
          <Section>
            {ANONYMOUS_MENU_ITEMS.map((menuItem, index) => (
              <MenuItem key={index} data={menuItem.data} icon={menuItem.icon} />
            ))}
          </Section>

          <Section style={{ padding: '20px 30px' }}>
            <SectionText>Faça login para curtir vídeos, comentar e se inscrever.</SectionText>
            <LoginButton />
          </Section>
        </>
      )}

      <Section>
        <SectionTitle>Explorar</SectionTitle>

        {EXPLORE_MENU_ITEMS.map((menuItem, index) => (
          <MenuItem key={index} data={menuItem.data} icon={menuItem.icon} />
        ))}
      </Section>
    </>
  )
}
