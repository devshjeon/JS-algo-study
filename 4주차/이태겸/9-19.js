function capitalizeFirst(arr) {
  // add whatever parameters you deem necessary - good luck!
  const result = []
  function func(arr) {
    if (arr.length === 0) return
    result.push(arr[0].slice(0, 1).toUpperCase() + arr[0].slice(1, arr[0].length))
    func(arr.slice(1, arr.length))
  }
  func(arr)
  return result
}

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
