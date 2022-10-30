const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])

function collectStrings(obj) {
  const result = [];

  for (let key in obj) {
    if (typeof obj[key] === "string") {
      result.push(obj[key]);
    } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      result.push(...collectStrings(obj[key]));
    }
  }

  return result;
}
