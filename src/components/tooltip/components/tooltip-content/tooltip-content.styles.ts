import { COLORS } from '@styles/colors'
import styled from 'styled-components'

type TooltipContentContainerProps = {
  $backgroundColor?: string
  $position?: 'top' | 'right' | 'bottom' | 'left'
}

type TooltipTextProps = {
  $textColor?: string
}

export const TooltipContentContainer = styled.div<TooltipContentContainerProps>`
  width: fit-content;

  display: none;
  opacity: 0;

  text-align: center;

  padding: 8px;
  border-radius: 4px;

  background-color: ${({ $backgroundColor }) =>
    $backgroundColor || COLORS.BACKGROUND.TRANSPARENT_GRAY};

  position: absolute;
  ${({ $position = 'bottom' }) => {
    if ($position === 'top') {
      return {
        left: '50%',
        bottom: 'calc(100% + 10px)',
        transform: 'translateX(-50%)'
      }
    }

    if ($position === 'right') {
      return {
        left: 'calc(100% + 10px)',
        top: '50%',
        transform: 'translateY(-50%)'
      }
    }

    if ($position === 'bottom') {
      return {
        left: '50%',
        top: 'calc(100% + 10px)',
        transform: 'translateX(-50%)'
      }
    }

    if ($position === 'left') {
      return {
        right: 'calc(100% + 10px)',
        top: '50%',
        transform: 'translateY(-50%)'
      }
    }
  }}
`

export const TooltipText = styled.span<TooltipTextProps>`
  min-width: max-content;
  display: block;

  color: ${({ $textColor }) => $textColor || COLORS.TEXT.WHITE};
  font-size: 12px;
  font-weight: 300;
`
