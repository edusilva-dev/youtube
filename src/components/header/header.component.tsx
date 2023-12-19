import { SearchBar } from './components/search-bar'
import { GenericCenteredDiv, Header } from './header.styles'
import { FaYoutube as YoutubeIcon } from 'react-icons/fa'

export const HeaderComponent = () => {
  return (
    <Header>
      {/* start */}
      <GenericCenteredDiv>
        <YoutubeIcon size={40} />
        <span>YouTube</span>
      </GenericCenteredDiv>
      {/* center [search input] */}
      <GenericCenteredDiv>
        <SearchBar.Root>
          <SearchBar.SearchButton/>
          <SearchBar.AudioSearch/>
        </SearchBar.Root>
      </GenericCenteredDiv>
      {/* end [login + options] */}
      <div></div>
    </Header>
  )
}
