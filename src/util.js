export const sortData = data => {
  let sortedData = [...data]
  sortedData.sort((a, b) => (a.name < b.name ? -1 : 1))
  return sortedData
}
