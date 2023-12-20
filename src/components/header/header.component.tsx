import React from 'react'
import { SearchBar } from './components/search-bar'
import { GenericCenteredDiv, Header } from './header.styles'
import { FaYoutube as YoutubeIcon } from 'react-icons/fa'
import { UserBar } from '@components/header/components/user-bar'
import { RxHamburgerMenu as HamburguerIcon } from "react-icons/rx";
import { IconContainer } from '@components/icon-container'


export const HeaderComponent: React.FC = () => {
  return (
    <Header>
      <GenericCenteredDiv style={{gap: 20}}>
        <IconContainer>
          <HamburguerIcon size={22} />
        </IconContainer>

        <GenericCenteredDiv>
          <YoutubeIcon fill={'red'} size={30} />
          <span>YouTube</span>
        </GenericCenteredDiv>
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
