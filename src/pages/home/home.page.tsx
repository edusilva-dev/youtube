import { VideoThumb } from '@components/video-thumb'
import { VIDEO_THUMB_TOP_RATED } from '@components/video-thumb/mocks/rails.mock'
import React from 'react'
import { Container, VideosContainer } from './home.styles'

export const HomePage: React.FC = () => {
  React.useEffect(() => {
    const getChannels = async () => {
      const response = await fetch('https://www.googleapis.com/youtube/v3/channels')
      const data = await response.json()
      console.log(data)
    }

    getChannels()
  }, [])

  return (
    <Container>
      <VideosContainer>
        {VIDEO_THUMB_TOP_RATED.map(video => (
          <VideoThumb data={video} />
        ))}
      </VideosContainer>
    </Container>
  )
}
