import React from 'react'
import { SearchButton as Button } from './search-button.styles'
import { IoSearchOutline as SearchIcon } from 'react-icons/io5'

export const SearchButton: React.FC = () => {
  return (
    <Button>
      <SearchIcon size={20} />
    </Button>
  )
}
