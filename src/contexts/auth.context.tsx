import { ReactNode, createContext, useState } from 'react'

interface IAuthContext {
  isLogged: boolean
  setIsLogged: (state: boolean) => void
}

export const AuthContext = createContext<IAuthContext>({
  isLogged: false,
  setIsLogged: () => undefined
})

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false)
  return <AuthContext.Provider value={{ isLogged, setIsLogged }}>{children}</AuthContext.Provider>
}
