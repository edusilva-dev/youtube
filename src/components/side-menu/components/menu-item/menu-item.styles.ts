import { COLORS } from '@styles/colors'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

type MenuLinkProps = {
  $isSelected?: boolean
  $isOpen: boolean
}

type MenuLabelProps = {
  $isTitle?: boolean
}

export const MenuLink = styled(Link)<MenuLinkProps>`
  padding: 10px;

  display: flex;
  flex-direction: ${({ $isOpen }) => ($isOpen ? 'row' : 'column')};
  align-items: center;
  gap: ${({ $isOpen }) => ($isOpen ? '25px' : '8px')};

  border-radius: 8px;
  background-color: ${({ $isSelected = false }) =>
    $isSelected ? COLORS.BACKGROUND.TRANSPARENT_GRAY2 : 'transparent'};

  text-decoration: none;

  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${COLORS.BACKGROUND.TRANSPARENT_GRAY2};
  }

  ${({ $isOpen }) => {
    if ($isOpen) return

    return {
      '& span': {
        fontSize: '10px!important'
      }
    }
  }}
`

export const MenuLabel = styled.span<MenuLabelProps>`
  color: white;
  font-size: ${({ $isTitle }) => ($isTitle ? '16px' : '13px')};
  font-weight: ${({ $isTitle }) => ($isTitle ? 400 : 300)};
  ${({ $isTitle }) => {
    if (!$isTitle) return

    return 'word-spacing: 10px;'
  }}
`
