export const sortData = data => {
  let sortedData = [...data]
  sortedData.sort((a, b) => (a.name < b.name ? -1 : 1))
  return sortedData
}

export const sortCountry = data => {
  let sortedData = [...data]
  sortedData.sort((a, b) => (a.country < b.country ? -1 : 1))
  return sortedData
}
