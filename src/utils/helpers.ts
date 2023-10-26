export const nFormatter = (value: number | string) => {
  const parsedVal = Number(value)
  const lookup = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'K' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'B' },
    { value: 1e12, symbol: 'T' },
    { value: 1e15, symbol: 'Q' },
    { value: 1e18, symbol: 'Z' },
  ]
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/
  const item = lookup
    .slice()
    .reverse()
    .find((item) => {
      return parsedVal >= item.value
    })

  return item
    ? String(Math.round(parsedVal / item.value)).replace(rx, '$1') + item.symbol
    : Math.round(parsedVal)
}

export const toFullDecimals = (val: number) => {
  return Math.round(val / 1e18) || 0
}
