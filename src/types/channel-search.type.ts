import { Thumbnails } from './result-search.type'

export type ChannelSearch = {
  items: Item[]
}

export type Item = {
  kind: string
  etag: string
  id: string
  snippet: Snippet
  contentDetails: ContentDetails
  statistics: Statistics
}

type Snippet = {
  title: string
  description: string
  customUrl: string
  publishedAt: string
  thumbnails: Thumbnails
  localized: Localized
  country: string
}

type Localized = {
  title: string
  description: string
}

type ContentDetails = {
  relatedPlaylists: {
    likes: string
    uploads: string
  }
}

type Statistics = {
  viewCount: string
  subscriberCount: string
  hiddenSubscriberCount: boolean
  videoCount: string
}
