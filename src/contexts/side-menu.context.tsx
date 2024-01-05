import { Dispatch, ReactNode, SetStateAction, createContext, useState } from 'react'

interface ISideMenuContext {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const SideMenuContext = createContext<ISideMenuContext>({
  isOpen: true,
  setIsOpen: () => undefined
})

export const SideMenuProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <SideMenuContext.Provider value={{ isOpen, setIsOpen }}>{children}</SideMenuContext.Provider>
  )
}
