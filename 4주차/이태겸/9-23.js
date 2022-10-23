function collectStrings(obj, arr = []) {
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      collectStrings(obj[key], arr)
    } else if (typeof obj[key] === 'string') {
      arr.push(obj[key])
    }
  }

  return arr
}

const obj = {
  stuff: 'foo',
  data: {
    val: {
      thing: {
        info: 'bar',
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: 'baz',
          },
        },
      },
    },
  },
}
