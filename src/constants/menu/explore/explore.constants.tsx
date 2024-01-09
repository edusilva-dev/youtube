import { FaFireAlt as TrendingIcon } from 'react-icons/fa'
import { AiOutlineShopping as ShoppingIcon } from 'react-icons/ai'
import { CgMusicNote as MusicIcon } from 'react-icons/cg'
import { PiFilmSlate as MovieIcon } from 'react-icons/pi'
import { CiStreamOn as LiveIcon } from 'react-icons/ci'
import { CgGames as GameIcon } from 'react-icons/cg'
import { HiOutlineNewspaper as NewsIcon } from 'react-icons/hi2'
import { GoTrophy as SportsIcon } from 'react-icons/go'
import { FaRegLightbulb as LearnIcon } from 'react-icons/fa'
import { MdPodcasts as PoscastIcon } from 'react-icons/md'

export const EXPLORE_MENU_ITEMS = [
  {
    data: {
      label: 'Em alta',
      href: '/trending'
    },
    icon: <TrendingIcon size={22} />
  },
  {
    data: {
      label: 'Shopping',
      href: '/shopping'
    },
    icon: <ShoppingIcon size={22} />
  },
  {
    data: {
      label: 'Música',
      href: '/music'
    },
    icon: <MusicIcon size={22} />
  },
  {
    data: {
      label: 'Filmes',
      href: '/movies'
    },
    icon: <MovieIcon size={22} />
  },
  {
    data: {
      label: 'Ao vivo',
      href: '/lives'
    },
    icon: <LiveIcon size={22} />
  },
  {
    data: {
      label: 'Jogos',
      href: '/games'
    },
    icon: <GameIcon size={22} />
  },
  {
    data: {
      label: 'Notícias',
      href: '/news'
    },
    icon: <NewsIcon size={22} />
  },
  {
    data: {
      label: 'Esportes',
      href: '/sportsc'
    },
    icon: <SportsIcon size={22} />
  },
  {
    data: {
      label: 'Aprender',
      href: '/learn'
    },
    icon: <LearnIcon size={22} />
  },
  {
    data: {
      label: 'Podcasts',
      href: '/podcasts'
    },
    icon: <PoscastIcon size={22} />
  }
]
