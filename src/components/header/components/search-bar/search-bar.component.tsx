import { useState } from 'react'
import {
  ConditionalSearchIcon,
  Container,
  InputContainer,
  IconsContainer,
  KeyboardIcon,
  SearchButton,
  SearchInput,
  ClearIcon,
  ClearIconHover
} from './search-bar.styles'
import { IoSearchOutline as SearchIcon } from 'react-icons/io5'

const SearchBar = () => {
  const [search, setSearch] = useState<string>('')

  const handleClearSearch = () => {
    setSearch('')
  }

  return (
    <Container>
      <InputContainer>
        <ConditionalSearchIcon size={20} className="conditional-search" />

        <SearchInput
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Pesquisar"
        />

        <IconsContainer>
          <KeyboardIcon />
          {search.length > 0 && (
            <ClearIconHover>
              <ClearIcon size={20} onClick={handleClearSearch} />
            </ClearIconHover>
          )}
        </IconsContainer>
      </InputContainer>

      <SearchButton>
        <SearchIcon size={20} />
      </SearchButton>
    </Container>
  )
}

export default SearchBar
