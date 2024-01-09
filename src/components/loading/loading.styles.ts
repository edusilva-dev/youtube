import styled from 'styled-components'
import { ImSpinner8 } from 'react-icons/im'

import { COLORS } from '@styles/colors'
import { rotate } from '@styles/animations'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${COLORS.BACKGROUND.TRANSPARENT_GRAY2};

  position: absolute;
  left: 0;
  top: 0;

  z-index: 10000;
`

export const SpinnerIcon = styled(ImSpinner8)`
  animation: ${rotate} 1s linear infinite;
`
