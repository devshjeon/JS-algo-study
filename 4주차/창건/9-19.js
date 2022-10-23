function capitalizeWords(strArray) {
  const result = [];

  if (strArray.length === 0) return result;

  const firstWord = strArray[0].charAt(0).toUpperCase() + strArray[0].slice(1);

  result.push(firstWord);

  result.concat(capitalizeWords(strArray.slice(1)));

  return result;
}

console.log(capitalizeWords(["hi", "bye"]));

// function capitalizeFirstLetter(string) {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// }

// console.log(capitalizeFirstLetter("hi"));
