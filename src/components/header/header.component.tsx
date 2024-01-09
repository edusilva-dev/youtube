import React, { useContext } from 'react'
import { SearchBar } from './components/search-bar'
import { GenericCenteredDiv, Header } from './header.styles'
import { SiYoutubetv as YoutubeIcon } from 'react-icons/si'
import { UserBar } from '@components/header/components/user-bar'
import { RxHamburgerMenu as HamburguerIcon } from 'react-icons/rx'
import { IconContainer } from '@components/icon-container'

import { SideMenuContext } from '@contexts/side-menu.context'
import { Link, useNavigate } from 'react-router-dom'

export const HeaderComponent: React.FC = () => {
  const { toggleMenu } = useContext(SideMenuContext)
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // @ts-ignore
    const search = e.target[0].value
    navigate(`/results?search_query=${search}`)
  }

  return (
    <Header>
      <GenericCenteredDiv style={{ gap: 20 }}>
        <IconContainer onClick={toggleMenu}>
          <HamburguerIcon size={22} />
        </IconContainer>

        <Link to="/">
          <YoutubeIcon size={100} />
        </Link>
      </GenericCenteredDiv>

      <GenericCenteredDiv>
        <form onSubmit={handleSubmit}>
          <SearchBar.Root>
            <SearchBar.SearchButton />
            <SearchBar.AudioSearch />
          </SearchBar.Root>
        </form>
      </GenericCenteredDiv>

      <GenericCenteredDiv>
        <UserBar.Root />
      </GenericCenteredDiv>
    </Header>
  )
}
