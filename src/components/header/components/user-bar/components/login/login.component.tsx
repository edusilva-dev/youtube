import { IconHover } from '@components/icon-hover'
import { ThreeDotsIcon } from './login.styles'
import { LoginButton } from '@components/login-button'

export const Login = () => {
  return (
    <>
      <IconHover $filled>
        <ThreeDotsIcon />
      </IconHover>
      <LoginButton />
    </>
  )
}
