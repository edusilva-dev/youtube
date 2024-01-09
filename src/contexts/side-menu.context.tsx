import { ReactNode, createContext, useState } from 'react'

interface ISideMenuContext {
  isOpen: boolean
  toggleMenu: () => void
}

export const SideMenuContext = createContext<ISideMenuContext>({
  isOpen: true,
  toggleMenu: () => undefined
})

export const SideMenuProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true)

  const toggleMenu = () => setIsOpen(prev => !prev)

  return (
    <SideMenuContext.Provider value={{ isOpen, toggleMenu }}>{children}</SideMenuContext.Provider>
  )
}
