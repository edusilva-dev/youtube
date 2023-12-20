import { fadeIn } from '@styles/animations'
import styled from 'styled-components'

export const TooltipContainer = styled.div`
  width: fit-content;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover div:nth-child(2) {
    display: block;
    animation: ${fadeIn} 0.2s ease forwards;
  }
`
