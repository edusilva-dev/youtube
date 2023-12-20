import React, { ReactNode } from 'react'
import { TooltipContainer } from './tooltip-root.styles'

type TooltipRootProps = {
  children: ReactNode
}

export const TooltipRoot: React.FC<TooltipRootProps> = ({ children }) => {
  return <TooltipContainer>{children}</TooltipContainer>
}
