import { AiOutlinePlaySquare as YouIcon } from 'react-icons/ai'
import { LuHistory as HistoryIcon } from 'react-icons/lu'

export const ANONYMOUS_MENU_ITEMS = [
  {
    data: {
      label: 'Você',
      href: '/you'
    },
    icon: <YouIcon size={22} />
  },
  {
    data: {
      label: 'Histórico',
      href: '/history'
    },
    icon: <HistoryIcon size={22} />
  }
]
