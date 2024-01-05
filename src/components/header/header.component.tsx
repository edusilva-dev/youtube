import React, { useContext } from 'react'
import { SearchBar } from './components/search-bar'
import { GenericCenteredDiv, Header } from './header.styles'
import { SiYoutubetv as YoutubeIcon } from 'react-icons/si'
import { UserBar } from '@components/header/components/user-bar'
import { RxHamburgerMenu as HamburguerIcon } from 'react-icons/rx'
import { IconContainer } from '@components/icon-container'

import { SideMenuContext } from '@contexts/side-menu.context'
import { Link } from 'react-router-dom'

export const HeaderComponent: React.FC = () => {
  const { setIsOpen } = useContext(SideMenuContext)

  const handleOpenCloseMenu = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <Header>
      <GenericCenteredDiv style={{ gap: 20 }}>
        <IconContainer onClick={handleOpenCloseMenu}>
          <HamburguerIcon size={22} />
        </IconContainer>

        <Link to="/">
          <YoutubeIcon size={100} />
        </Link>
      </GenericCenteredDiv>

      <GenericCenteredDiv>
        <SearchBar.Root>
          <SearchBar.SearchButton />
          <SearchBar.AudioSearch />
        </SearchBar.Root>
      </GenericCenteredDiv>

      <GenericCenteredDiv>
        <UserBar.Root />
      </GenericCenteredDiv>
    </Header>
  )
}
