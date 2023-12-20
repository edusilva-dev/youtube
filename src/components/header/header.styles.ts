import { SIZES } from '@styles/sizes'
import styled from 'styled-components'

export const Header = styled.header`
  width: 100%;
  height: ${SIZES.HEADER.HEIGHT};

  padding: 0 16px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: #0f0f0f;

  position: fixed;
  top: 0;
  left: 0;
`
export const GenericCenteredDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`
