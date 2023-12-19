import styled from 'styled-components'
import { FaKeyboard } from 'react-icons/fa'
import { IoSearchOutline } from 'react-icons/io5'
import { IoMdClose } from 'react-icons/io'

export const Container = styled.div`
  min-width: 600px;
  height: 40px;

  display: flex;
  align-items: center;

  overflow: hidden;
`

export const InputContainer = styled.div`
  width: 100%;
  height: 100%;

  padding: 0 10px;

  display: flex;
  align-items: center;
  gap: 15px;

  border: 1px solid #454545;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;

  position: relative;

  &:focus-within {
    border-color: #3767cc;
  }

  &:focus-within > .conditional-search {
    display: block;
  }
`

export const ConditionalSearchIcon = styled(IoSearchOutline)`
  display: none;
  margin-left: 7px;
`

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;

  background-color: transparent;
`

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  cursor: pointer;
`

export const KeyboardIcon = styled(FaKeyboard)`
  & > path {
    color: #bcbcbc;
    transition: all 0.2s ease;
  }

  &:hover > path {
    color: #fff;
  }
`

export const ClearIconHover = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  &:hover::before {
    content: '';
    width: 25px;
    height: 25px;

    background-color: rgba(200, 200, 200, 0.5);
    border-radius: 100%;

    transition: all 0.2s ease;

    position: absolute;
  }
`

export const ClearIcon = styled(IoMdClose)`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  & > path {
    color: #bcbcbc;
    transition: 0.2s ease;
  }

  &:hover > path {
    color: #fff;
  }

  z-index: 10;
`


