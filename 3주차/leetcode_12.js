var intToRoman = function (num) {
  let answer = "";

  const dict = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  };

  const sortedProperties = Object.keys(dict).sort((a, b) => b - a); // 내림차순 정렬 [1000, 900, 500, 400, ... 5, 4, 1]

  sortedProperties.forEach((val) => {
    repeat = parseInt(num / val); // 몫
    for (let i = 0; i < repeat; i++) {
      answer += dict[val];
    }
    num = num % val;
  });

  return answer;
};

const num = 10000000000000000000000000000000;
console.log(parseInt(num));
