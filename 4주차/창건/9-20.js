function nestedEvenSum(input) {
  let result = 0;

  const keys = Object.keys(input);

  for (i = 0; i < keys.length; i++) {
    const target = input[keys[i]];
    if (target % 2 === 0) result += target;
    else if (typeof target === "object") {
      result += nestedEvenSum(target);
    }
  }
  return result;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

nestedEvenSum(obj1); // 6
nestedEvenSum(obj2); // 10
