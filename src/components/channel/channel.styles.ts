import { COLORS } from '@styles/colors'
import { SIZES } from '@styles/sizes'
import styled from 'styled-components'

export const ChannelContainer = styled.a`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: flex-start;
  gap: 12px;

  text-decoration: none;
`

export const ThumbnailContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: ${SIZES.SEARCH.THUMB.WIDTH};
`

export const Thumbnail = styled.img`
  width: ${SIZES.SEARCH.CHANNEL.LOGO.WIDTH};
  height: ${SIZES.SEARCH.CHANNEL.LOGO.HEIGHT};

  border-radius: 100%;
`

export const ChannelInfos = styled.div`
  display: flex;
  flex-direction: column;
`

export const ChannelTitle = styled.h2`
  width: 100%;

  color: ${COLORS.TEXT.WHITE};
  font-size: 18px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: nonde;
`

export const ChannelInfoContainer = styled.div`
  margin-top: 8px;

  display: flex;
  align-items: center;
  gap: 4px;
`

export const ChannelUserName = styled.span`
  color: ${COLORS.TEXT.GRAY};
  font-size: 12px;
`

export const Separator = styled.span`
  color: ${COLORS.TEXT.GRAY};
  font-size: 12px;
`

export const ChannelSubscribers = styled.span`
  color: ${COLORS.TEXT.GRAY};
  font-size: 12px;
`

export const Description = styled.p`
  width: 100%;

  display: -webkit-box;
  margin-top: 8px;

  color: ${COLORS.TEXT.GRAY};
  font-size: 12px;
  line-clamp: 2;
  -webkit-box-orient: vertical;

  overflow: hidden;
`
