import React, { memo, useEffect, useState } from 'react'
import { getChannel } from 'src/api/youtube'

import {
  ChannelContainer,
  ChannelInfoContainer,
  ChannelInfos,
  ChannelSubscribers,
  ChannelTitle,
  ChannelUserName,
  Description,
  Separator,
  Thumbnail,
  ThumbnailContainer
} from './channel.styles'

import { convertSubscribersToText } from 'src/utils/convert-subscribers-to-text'

import { Item } from 'src/types/channel-search.type'

type ChannelProps = {
  channelId: string
}

const ChannelComponent: React.FC<ChannelProps> = ({ channelId }) => {
  const [channel, setChannel] = useState<Item>()

  useEffect(() => {
    const getChannelData = async () => {
      const response = await getChannel(channelId)
      setChannel(response.items[0])
    }

    getChannelData()
  }, [channelId])

  return (
    <ChannelContainer href={`https://www.youtube.com/channel/${channelId}`} target="blank">
      <ThumbnailContainer>
        <Thumbnail src={channel?.snippet.thumbnails.high.url} />
      </ThumbnailContainer>

      <ChannelInfos>
        <ChannelTitle>{channel?.snippet.title}</ChannelTitle>

        <ChannelInfoContainer>
          <ChannelUserName>{channel?.snippet.customUrl}</ChannelUserName>
          {!channel?.statistics.hiddenSubscriberCount && (
            <>
              <Separator>•</Separator>
              <ChannelSubscribers>
                {convertSubscribersToText(channel?.statistics.subscriberCount)} de inscritos
              </ChannelSubscribers>
            </>
          )}
        </ChannelInfoContainer>

        <Description>{channel?.snippet.description}</Description>
      </ChannelInfos>
    </ChannelContainer>
  )
}

export const Channel = memo(ChannelComponent)
