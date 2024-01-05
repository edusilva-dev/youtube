import { IoHomeOutline as HomeIcon } from 'react-icons/io5'
import { SiYoutubeshorts as ShortsIcon } from 'react-icons/si'
import { BsCollectionPlay as SubscriptionIcon } from 'react-icons/bs'

export const MAIN_MENU_ITEMS = [
  {
    data: {
      label: 'Início',
      href: '/'
    },
    icon: <HomeIcon size={22} />
  },
  {
    data: {
      label: 'Shorts',
      href: '/shorts'
    },
    icon: <ShortsIcon size={22} />
  },
  {
    data: {
      label: 'Inscrições',
      href: '/subscriptions'
    },
    icon: <SubscriptionIcon size={22} />
  }
]
