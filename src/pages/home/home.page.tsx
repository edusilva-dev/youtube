import { VideoThumb } from '@components/video-thumb'
import { VIDEO_THUMB_TOP_RATED } from '@components/video-thumb/mocks/rails.mock'
import React from 'react'
import { Container, VideosContainer } from './home.styles'

export const HomePage: React.FC = () => {
  return (
    <Container>
      <VideosContainer>
        {VIDEO_THUMB_TOP_RATED.map((video, index) => (
          <VideoThumb key={index} data={video} />
        ))}
      </VideosContainer>
    </Container>
  )
}
