export const convertPublishDataToString = (publishedDate: string): string => {
  const currentDate = new Date()
  const publishedAt = new Date(publishedDate)

  const differenceInMs = currentDate.getTime() - publishedAt.getTime()

  const differenceInDays = Math.round(differenceInMs / (1000 * 3600 * 24))
  if (differenceInDays > 1) {
    return `há ${differenceInDays} dias`
  }

  if (publishedAt.getHours() >= 1) {
    return `há ${publishedAt.getHours()} horas`
  }

  return `há ${publishedAt.getMinutes()} minutos`
}
