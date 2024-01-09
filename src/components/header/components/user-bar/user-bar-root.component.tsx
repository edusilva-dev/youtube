import { UserBarContainer } from './user-bar-root.styles'
import { AuthContext } from '@contexts/auth.context'
import { useContext } from 'react'
import { Signed } from './components/signed'
import { Login } from './components/login/login.component'

export const UserBarRoot = () => {
  const { isLogged } = useContext(AuthContext)
  return (
    <UserBarContainer>
      {isLogged ? <Signed/> : <Login/>}
    </UserBarContainer>
  )
}
