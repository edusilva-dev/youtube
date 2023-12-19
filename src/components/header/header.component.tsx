import React from 'react'
import { SearchBar } from './components/search-bar'
import { GenericCenteredDiv, Header } from './header.styles'
import { FaYoutube as YoutubeIcon } from 'react-icons/fa'

export const HeaderComponent: React.FC = () => {
  return (
    <Header>
      <GenericCenteredDiv>
        <YoutubeIcon size={40} />
        <span>YouTube</span>
      </GenericCenteredDiv>

      <GenericCenteredDiv>
        <SearchBar.Root>
          <SearchBar.SearchButton />
          <SearchBar.AudioSearch />
        </SearchBar.Root>
      </GenericCenteredDiv>

      <div></div>
    </Header>
  )
}
