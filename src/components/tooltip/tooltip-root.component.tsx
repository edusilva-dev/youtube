import React, { ReactNode } from 'react'
import { TooltipContainer } from './tooltip-root.styles'

interface TooltipRootProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export const TooltipRoot: React.FC<TooltipRootProps> = ({ children, style }) => {
  return <TooltipContainer style={style}>{children}</TooltipContainer>
}
