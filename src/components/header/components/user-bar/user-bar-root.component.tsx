import { IconHover } from '@components/icon-hover'
import { LoginButton } from './components/login-button'
import { ThreeDotsIcon, UserBarContainer } from './user-bar-root.styles'

export const UserBarRoot = () => {
  return (
    <UserBarContainer>
      <IconHover $filled>
        <ThreeDotsIcon />
      </IconHover>
      <LoginButton />
    </UserBarContainer>
  )
}
