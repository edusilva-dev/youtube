import { useEffect, useState } from 'react'
import { Page } from '@components/page'
import { Loading } from '@components/loading'
import { Video } from '@components/video'

import { ResultsSection } from './search-result.styles'

import { getSearch } from 'src/api/youtube'
import { useQueryParams } from '@hooks/use-query-params.hook'
import { ResultSearch } from 'src/types/result-search.type'
import { ContentType } from '@constants/content-type/content-type.enum'
import { Channel } from '@components/channel'

export const SearchResult: React.FC = () => {
  const query = useQueryParams()
  const search = query.get('search_query')
  const [searchResult, setSearchResult] = useState<ResultSearch>()
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const getDate = async () => {
      setIsLoading(true)

      if (!search) {
        setIsLoading(false)
        return
      }

      const response = await getSearch(search)
      console.log(response)
      setIsLoading(false)
      setSearchResult(response)
    }

    getDate()
  }, [search])

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Page>
          <ResultsSection>
            {searchResult?.items.map(item => {
              const type = item.id.kind.match(/[^#]*$/g)![0]
              if (type === ContentType.VIDEO) {
                return (
                  <Video
                    data={item.snippet}
                    videoId={item.id.videoId!}
                    key={item.id.videoId || item.id.channelId}
                  />
                )
              }

              if (type === ContentType.CHANNEL) {
                return <Channel channelId={item.id.channelId!} key={item.id.channelId} />
              }
            })}
          </ResultsSection>
        </Page>
      )}
    </>
  )
}
