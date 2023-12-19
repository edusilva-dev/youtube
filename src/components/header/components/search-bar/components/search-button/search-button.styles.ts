import styled from "styled-components";

export const SearchButton = styled.button`
  width: 80px;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #252525;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;

  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: #656565;
  }
`