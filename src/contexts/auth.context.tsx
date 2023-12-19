import { Dispatch, ReactNode, SetStateAction, createContext, useState } from 'react'

interface IAuthContext<T> {
  isLogged: boolean
  setIsLogged: Dispatch<SetStateAction<T>>
}

export const AuthContext = createContext<IAuthContext<boolean>>({
  isLogged: false,
  setIsLogged: () => undefined
})

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false)

  return <AuthContext.Provider value={{ isLogged, setIsLogged }}>{children}</AuthContext.Provider>
}
