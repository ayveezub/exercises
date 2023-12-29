const mergeArrays = (arr1, arr2) => {
  let merged = arr1.concat(arr2)
  let mergedAndSorted = merged.sort((a, b) => a - b)
  
  return mergedAndSorted.filter((item, ind) => mergedAndSorted.indexOf(item) === ind)
}
