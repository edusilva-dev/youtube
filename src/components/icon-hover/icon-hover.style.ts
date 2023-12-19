import { COLORS } from "@styles/colors";
import styled from "styled-components";

type IconHoverProps = {
  $filled?: boolean
}

export const IconHover = styled.div<IconHoverProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  
  position: relative;
  
  cursor: pointer;

  ${
    ({$filled}) =>
      $filled && `
          padding: 10px;
          background-color: ${COLORS.BACKGROUND.LIGHT_BLACK};
          border-radius: 100%;
          `
  }

  &:hover::before {
    content: '';
    width: ${({$filled}) => $filled ? '40px' : '20px'};
    height: ${({$filled}) => $filled ? '40px' : '20px'};

    background-color: rgba(200, 200, 200, 0.5);
    border-radius: 100%;

    transition: all 0.2s ease;

    position: absolute;
  }
`