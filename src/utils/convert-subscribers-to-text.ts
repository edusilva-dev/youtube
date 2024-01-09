export const convertSubscribersToText = (views: string): string => {
  const lookup = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'mil' },
    { value: 1e6, symbol: 'mi' }
  ]
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/
  const item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return views >= item.value
    })
  return item ? (views / item.value).toFixed(2).replace(rx, '$1') + ' ' + item.symbol : '0'
}
