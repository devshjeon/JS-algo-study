/*
답안 코드를 보니 코드를 정말 쓸데 없이 길게 짰다는 생각이 든다...
*/

// helper를 활용한 답
function helperReverse(str) {
  let result = '';

  function helper(helperInput) {
    if (helperInput.length === 0) return; // 탈출
    result += helperInput.slice(-1);
    helper(helperInput.slice(0, -1));
  }

  helper(str);

  return result;
}

// pure로 바꿔보기
function pureReverse(str) {
  let result = '';

  if (str.length === 0) return result;

  result += str.slice(-1);

  return result + pureReverse(str.slice(0, -1));
}

function godReverse(str) {
  if (str.length === 0) return '';
  return godReverse(str.slice(1)) + str[0]; // 포인트는 return할 때 순서
}
