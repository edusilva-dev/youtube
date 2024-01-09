import styled from 'styled-components'
import { COLORS } from '@styles/colors.ts'
import { BiUserCircle } from 'react-icons/bi'

export const LoginContainer = styled.button`
  width: fit-content;
  height: 34px;

  padding: 2px 10px;
  gap: 6px;
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid ${COLORS.BORDER.GRAY};
  border-radius: 50px;
  background: transparent;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: ${COLORS.BACKGROUND.BLUE};
  }
`

export const UserIcon = styled(BiUserCircle)`
  & path {
    color: ${COLORS.ICON.BLUE};
  }
`

export const LoginText = styled.span`
  font-size: 14px;
  font-family: 'Roboto', 'Arial', sans-serif;
  color: ${COLORS.TEXT.BLUE};
  font-weight: 500;
  line-height: 36px;
`
