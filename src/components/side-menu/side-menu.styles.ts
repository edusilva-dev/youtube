import { COLORS } from '@styles/colors'
import { SIZES } from '@styles/sizes'
import styled from 'styled-components'

type SideMenuProps = {
  $isOpen: boolean
}

export const SideMenuContainer = styled.aside<SideMenuProps>`
  width: ${({ $isOpen }) => ($isOpen ? SIZES.MENU.OPENED.WIDTH : SIZES.MENU.CLOSED.WIDTH)};
  height: calc(100vh - ${SIZES.HEADER.HEIGHT});

  margin-top: ${SIZES.HEADER.HEIGHT};

  display: flex;
  flex-direction: column;

  overflow-y: auto;
  transition: all 0.2s ease;

  position: fixed;
  z-index: 100;

  &::-webkit-scrollbar {
    width: 9px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 20px;
  }

  &:hover::-webkit-scrollbar-thumb {
    background-color: ${COLORS.BACKGROUND.GRAY};
  }
`

export const Section = styled.div`
  padding: 12px;

  display: flex;
  flex-direction: column;

  border-bottom: 1px solid ${COLORS.BORDER.GRAY};
`

export const MiddleSection = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 10px;
  padding-top: 10px;

  border-top: 1px solid ${COLORS.BORDER.GRAY};
`

export const SectionTitle = styled.h3`
  margin-left: 10px;

  color: white;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 2.2rem;
`

export const SectionText = styled.p`
  margin-bottom: 15px;

  font-size: 14px;
  line-height: 1.2rem;
`
