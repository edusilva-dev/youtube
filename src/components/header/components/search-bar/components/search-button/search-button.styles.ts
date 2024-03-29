import styled from 'styled-components'

import { COLORS } from '@styles/colors'

export const SearchButton = styled.button`
  width: 80px;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${COLORS.BACKGROUND.LIGHT_BLACK};
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;

  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: #656565;
  }
`
