import { IconHover } from '@components/icon-hover/icon-hover.style'
import { Tooltip } from '@components/tooltip'
import React from 'react'
import { FaMicrophone as MicrophoneIcon} from 'react-icons/fa'

export const AudioSearch: React.FC = () => {
  return (
    <Tooltip.Root>
      <IconHover style={{marginLeft: 15}} $filled>
          <MicrophoneIcon size={20}/>
          <Tooltip.Content text='Pesquisar com sua voz' />
      </IconHover>
    </Tooltip.Root>
  )
}
