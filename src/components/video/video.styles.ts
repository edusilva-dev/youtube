import { COLORS } from '@styles/colors'
import { SIZES } from '@styles/sizes'
import styled from 'styled-components'

export const VideoContainer = styled.a`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: flex-start;
  gap: 12px;

  text-decoration: none;
`

export const ThumbnailContainer = styled.div`
  min-width: ${SIZES.SEARCH.THUMB.WIDTH};
  min-height: ${SIZES.SEARCH.THUMB.HEIGHT};
  max-width: ${SIZES.SEARCH.THUMB.WIDTH};
  max-height: ${SIZES.SEARCH.THUMB.HEIGHT};
`

export const Thumbnail = styled.img`
  width: 100%;
  max-height: ${SIZES.SEARCH.THUMB.HEIGHT};
  object-fit: cover;

  border-radius: 12px;
`

export const VideoInfos = styled.div`
  display: flex;
  flex-direction: column;
`

export const VideoTitle = styled.h2`
  width: 100%;

  display: -webkit-box;

  font-size: 18px;
  font-weight: 500;
  line-clamp: 2;
  -webkit-box-orient: vertical;

  overflow: hidden;
`

export const PublishedAt = styled.span`
  margin-top: 4px;

  color: ${COLORS.TEXT.GRAY};
  font-size: 12px;
`

export const ChannelInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  margin-top: 8px;
`

export const ChannelImage = styled.img`
  width: ${SIZES.SEARCH.THUMB.CHANNEL.LOGO.WIDTH};
  height: ${SIZES.SEARCH.THUMB.CHANNEL.LOGO.HEIGHT};
  object-fit: cover;

  border-radius: 100%;
`

export const ChannelTitle = styled.span`
  color: ${COLORS.TEXT.GRAY};
  font-size: 12px;
`

export const Description = styled.p`
  width: 100%;

  margin-top: 16px;

  color: ${COLORS.TEXT.GRAY};
  font-size: 12px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: nonde;
`
