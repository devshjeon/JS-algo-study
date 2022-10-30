let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

function stringifyNumbers(obj) {
  const result = {};

  for (let key in obj) {
    if (typeof obj[key] === "number") {
      result[key] = obj[key] + "";
    } else if (typeof obj[key] === "object") {
      result[key] = stringifyNumbers(obj[key]);
    } else {
      result[key] = obj[key];
    }
  }
  return result;
}

console.log(stringifyNumbers(obj));
