import React from 'react'
import { SearchButton as Button } from './search-button.styles'
import { IoSearchOutline as SearchIcon } from 'react-icons/io5'
import { Tooltip } from '@components/tooltip'

export const SearchButton: React.FC = () => {
  return (
    <Button type="submit">
      <Tooltip.Root style={{ height: '100%', width: '100%' }}>
        <SearchIcon size={20} />
        <Tooltip.Content text="Pesquisar" />
      </Tooltip.Root>
    </Button>
  )
}
