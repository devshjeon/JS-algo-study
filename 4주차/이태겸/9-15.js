function reverse(arr) {
  // add whatever parameters you deem necessary - good luck!
  if (arr.length === 0) return ''
  return arr[arr.length - 1] + reverse(arr.slice(0, arr.length - 1))
}

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'
