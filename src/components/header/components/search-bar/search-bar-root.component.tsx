import { useState } from 'react'
import {
  ConditionalSearchIcon,
  Container,
  InputContainer,
  IconsContainer,
  KeyboardIcon,
  SearchInput,
  ClearIcon,
  ClearIconHover
} from './search-bar.styles'
import { ReactChildren } from 'src/interfaces/react-children.interface'

export const SearchBarRoot = ({ children }: ReactChildren) => {
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

      {children}
    </Container>
  )
}
