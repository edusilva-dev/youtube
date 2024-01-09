import React, { memo } from 'react'
import {
  ChannelImage,
  ChannelInfo,
  ChannelTitle,
  Description,
  PublishedAt,
  Thumbnail,
  ThumbnailContainer,
  VideoContainer,
  VideoInfos,
  VideoTitle
} from './video.styles'

import { convertPublishDataToString } from 'src/utils/convert-publish-date-to-string'

import { Result } from 'src/types/result-search.type'

type VideoProps = {
  data: Result
  videoId: string
}

export const VideoComponent: React.FC<VideoProps> = ({
  videoId,
  data: { publishedAt, title, description, thumbnails, channelTitle }
}) => {
  return (
    <VideoContainer href={`https://youtube.com/watch?v=${videoId}`} target="blank">
      <ThumbnailContainer>
        <Thumbnail src={thumbnails.high.url} loading="lazy" />
      </ThumbnailContainer>

      <VideoInfos>
        <VideoTitle>{title}</VideoTitle>

        <PublishedAt>{convertPublishDataToString(publishedAt)}</PublishedAt>

        <ChannelInfo>
          <ChannelImage src="https://placehold.co/30x30" />
          <ChannelTitle>{channelTitle}</ChannelTitle>
        </ChannelInfo>

        <Description>{description}</Description>
      </VideoInfos>
    </VideoContainer>
  )
}

export const Video = memo(VideoComponent)
