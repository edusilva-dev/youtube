// React.useEffect(() => {
//   const getChannels = async () => {
//     const response = await fetch(
//       'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=[SEARCH]&key=AIzaSyBQDSQ-MId9WlyC2bK7W-0fhp5CecHBx9I'
//     )
//     const data = await response.json()
//     console.log(data)
//   }
//
//   getChannels()
// }, [])

import axios from 'axios'
import { ChannelSearch } from 'src/types/channel-search.type'

const api = axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3/'
})
const API_KEY = import.meta.env.VITE_API_KEY

export const getSearch = async (search: string) => {
  const response = await api.get(`search?part=snippet&maxResults=25&q=${search}&key=${API_KEY}`)

  return response.data
}

export const getChannel = async (channelId: string): Promise<ChannelSearch> => {
  return (
    await api.get(
      `channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${API_KEY}`
    )
  ).data as ChannelSearch
}
