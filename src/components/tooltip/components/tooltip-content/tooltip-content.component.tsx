import React from 'react'
import { TooltipContentContainer, TooltipText } from './tooltip-content.styles'

type TooltipContentProps = {
  text: string
  bgColor?: string
  textColor?: string
  position?: 'top' | 'right' | 'bottom' | 'left'
}

export const TooltipContent: React.FC<TooltipContentProps> = ({
  position = 'bottom',
  text,
  bgColor,
  textColor
}) => {
  return (
    <TooltipContentContainer $position={position} $backgroundColor={bgColor}>
      <TooltipText $textColor={textColor}>{text}</TooltipText>
    </TooltipContentContainer>
  )
}
