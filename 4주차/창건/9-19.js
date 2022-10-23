// concat이 원본배열을 바꾼다고 생각해서 잘못 풀었음

function capitalizeFirst(strArray) {
  let result = [];

  if (strArray.length === 0) return result;

  const firstWord = strArray[0].charAt(0).toUpperCase() + strArray[0].slice(1);

  result.push(firstWord);

  result = result.concat(capitalizeFirst(strArray.slice(1)));

  return result;
}

console.log(capitalizeFirst(["car", "taco", "banana"]));
