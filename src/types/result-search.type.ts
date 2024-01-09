export type ResultSearch = {
  kind: string
  etag: string
  nextPageToken: string
  regionCode: string
  pageInfo: PageInfo
  items: Item[]
}

type PageInfo = {
  totalResults: number
  resultsPerPage: number
}

type Id = {
  kind: string
  channelId?: string
  videoId?: string
}

export type Item = {
  kind: string
  etag: string
  id: Id
  snippet: Result
}

export type Result = {
  publishedAt: string
  channelId: string
  title: string
  description: string
  thumbnails: Thumbnails
  channelTitle: string
  liveBroadcastContent: string
  publishTime: string
}

export type Thumbnails = {
  default: Thumbnail
  medium: Thumbnail
  high: Thumbnail
}

type Thumbnail = {
  url: string
  width: number
  height: number
}
