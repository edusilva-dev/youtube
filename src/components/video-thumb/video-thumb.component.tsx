import {
  ChannelInfoContainer,
  ChannelLogo,
  ChannelName,
  InfosContainer,
  StatText,
  StatsContainer,
  VideoContentContainer,
  VideoThumbContainer,
  VideoThumbImage,
  VideoThumbImageContainer,
  VideoThumbImageTag,
  VideoTitle
} from './video-thumb.styles'
import { IoCheckmarkCircle as VerifiedIcon } from 'react-icons/io5'

import { VideoThumbProps } from './video-thumb.type'
import { convertViewsToText } from 'src/utils/convert-views-to-text'
import { useContext } from 'react'
import { SideMenuContext } from '@contexts/side-menu.context'

export const VideoThumb: React.FC<VideoThumbProps> = ({ data: { image, channel, video } }) => {
  const { isOpen } = useContext(SideMenuContext)

  return (
    <VideoThumbContainer $isMenuOpen={isOpen}>
      <VideoThumbImageContainer>
        <VideoThumbImage src={image.src} alt={image.alt} loading="lazy" $isMenuOpen={isOpen} />
        <VideoThumbImageTag>{video.duration}</VideoThumbImageTag>
      </VideoThumbImageContainer>

      <VideoContentContainer>
        <ChannelLogo src={channel.imageUrl} alt={channel.name} loading="lazy" />

        <InfosContainer>
          <VideoTitle>{video.title}</VideoTitle>

          <ChannelInfoContainer>
            <ChannelName>{channel.name}</ChannelName>
            {channel.isVerified && <VerifiedIcon fill="#bcbcbc" />}
          </ChannelInfoContainer>

          <StatsContainer>
            <StatText>{convertViewsToText(video.views)} visualizações</StatText>
            <StatText>•</StatText>
            <StatText>há {video.postedIn} horas</StatText>
          </StatsContainer>
        </InfosContainer>
      </VideoContentContainer>
    </VideoThumbContainer>
  )
}
