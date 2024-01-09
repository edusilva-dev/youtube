export type VideoThumbProps = {
  data: VideoThumbData
}

export type VideoThumbData = {
  image: VideoThumbImage
  channel: VideoChannel
  video: VideoThumb
}

type VideoThumb = {
  title: string
  views: number
  postedIn: number
  duration: string
}

type VideoThumbImage = {
  src: string
  alt: string
}

type VideoChannel = {
  name: string
  imageUrl: string
  isVerified: boolean
}
