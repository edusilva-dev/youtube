import { FC, useContext } from 'react'
import { LoginContainer, LoginText, UserIcon } from './login-button.styles.ts'
import { AuthContext } from '@contexts/auth.context.tsx'

export const LoginButton: FC = () => {
  const { setIsLogged } = useContext(AuthContext)

  const handleLoginClick = () => {
    setIsLogged(prev => !prev)
  }

  return (
    <LoginContainer onClick={handleLoginClick}>
      <UserIcon size={22} />
      <LoginText>Fazer login</LoginText>
    </LoginContainer>
  )
}
