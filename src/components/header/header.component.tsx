import SearchBar from './components/search-bar/search-bar.component'
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
        <SearchBar />
      </GenericCenteredDiv>
      {/* end [login + options] */}
      <div></div>
    </Header>
  )
}
