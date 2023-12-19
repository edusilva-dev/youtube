import { IconHover } from '@components/icon-hover/icon-hover.style'
import React from 'react'
import { FaMicrophone as MicrophoneIcon} from 'react-icons/fa'

export const AudioSearch: React.FC = () => {
  return <IconHover style={{marginLeft: 15}} $filled><MicrophoneIcon size={20}/></IconHover>
}
