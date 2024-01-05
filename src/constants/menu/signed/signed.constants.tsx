import { LuUserSquare2 as ChannelIcon } from 'react-icons/lu'
import { LuHistory as HistoryIcon } from 'react-icons/lu'
import { FaRegCaretSquareRight as VideosIcon } from 'react-icons/fa'
import { IoMdTime as WatchLaterIcon } from 'react-icons/io'

export const SIGNED_MENU_ITEMS = [
  {
    data: {
      label: 'Você >',
      href: '/you',
      isTitle: true
    }
  },
  {
    data: {
      label: 'Seu canal',
      href: '/your-channel'
    },
    icon: <ChannelIcon size={22} />
  },
  {
    data: {
      label: 'Histórico',
      href: '/history'
    },
    icon: <HistoryIcon size={22} />
  },
  {
    data: {
      label: 'Seus vídeos',
      href: '/your-videos'
    },
    icon: <VideosIcon size={22} />
  },
  {
    data: {
      label: 'Assistir mais tarde',
      href: '/watch-later'
    },
    icon: <WatchLaterIcon size={22} />
  }
]
