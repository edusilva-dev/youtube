import { fadeIn } from '@styles/animations'
import styled from 'styled-components'

export const TooltipContainer = styled.div`
  position: relative;

  &:hover div:nth-child(2) {
    display: block;
    animation: ${fadeIn} 0.2s ease forwards;
  }
`
