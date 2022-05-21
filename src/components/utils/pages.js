export const getPageCount = (totalCount, limit) => {
  return Math.ceil(totalCount / limit)
}

export const getPagesArray = (totalPages) => {
  const arr = []
  for(let i=1; i <= totalPages; i++) {
    arr.push(i)
  }
  return arr
}