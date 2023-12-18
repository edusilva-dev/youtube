import { createContext, useState } from "react";
import { ReactChildren } from "src/interfaces/react-children.interface";

interface IAuthContext {
    isLogged: boolean
    setIsLogged: (state: boolean) => void
}
  
export const AuthContext = createContext<IAuthContext>({
  isLogged: false,
  setIsLogged: () => undefined
})

export const AuthProvider = ({ children }: ReactChildren) => {
    const [isLogged, setIsLogged] = useState(false)
    return (
        <AuthContext.Provider value={{isLogged, setIsLogged}}>
            {children}
        </AuthContext.Provider>
    )
}