import { COLORS } from '@styles/colors'
import styled from 'styled-components'

export const VideoThumbContainer = styled.div`
  width: 368px;

  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const VideoThumbImageContainer = styled.div`
  position: relative;
`

export const VideoThumbImage = styled.img`
  width: 368px;
  height: 207px;

  border-radius: 12px;
`

export const VideoThumbImageTag = styled.span`
  padding: 4px;

  border-radius: 4px;
  background-color: ${COLORS.BACKGROUND.LIGHT_BLACK};

  color: ${COLORS.TEXT.WHITE};
  font-size: 12px;
  font-weight: 500;

  position: absolute;
  bottom: 8px;
  right: 8px;
`

export const VideoContentContainer = styled.div`
  display: flex;
  gap: 16px;
`

export const InfosContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ChannelLogo = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 100%;
`

export const VideoTitle = styled.h2`
  display: -webkit-box;

  width: 100%;

  font-size: 18px;
  font-weight: 500;
  line-clamp: 2;
  -webkit-box-orient: vertical;

  overflow: hidden;
`

export const ChannelInfoContainer = styled.div`
  margin-top: 4px;

  display: flex;
  align-items: center;
  gap: 4px;
`

export const ChannelName = styled.a`
  color: ${COLORS.TEXT.GRAY};
  font-size: 14px;
`

export const StatsContainer = styled.div`
  margin-top: 4px;

  display: flex;
  align-items: center;
  gap: 4px;
`

export const StatText = styled.span`
  color: ${COLORS.TEXT.GRAY};
  font-size: 14px;
`
