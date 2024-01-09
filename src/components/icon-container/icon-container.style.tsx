import { COLORS } from '@styles/colors'
import styled from 'styled-components'

type IconContainerProps = {
  $filled?: boolean
}

export const IconContainer = styled.div<IconContainerProps>(({ $filled }) => ({
  padding: '8px',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  backgroundColor: $filled ? COLORS.BACKGROUND.LIGHT_BLACK : 'transparent',
  borderRadius: '100%',

  transition: '0.2s ease',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: $filled ? COLORS.BACKGROUND.TRANSPARENT_GRAY : COLORS.BACKGROUND.LIGHT_BLACK
  }
}))
