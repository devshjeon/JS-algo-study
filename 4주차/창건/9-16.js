// helper로 짰는데, 쓸데없이 길어졋다.
function isPalindrome(str) {
  // 앞서 15번 문제에서 만든 reverse를 helper로 사용
  function helper(helperInput) {
    if (helperInput.length <= 1) return helperInput;
    return helper(helperInput.slice(1)) + helperInput[0];
  }

  // 거꾸로 뒤집은 문자열 획득
  let result = helper(str);

  // 원본과 거꾸로 뒤집은 문자열 비교
  if (str === result) return true;
  return false;
}

// 강의 답안
function cleanPalindrome(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return cleanPalindrome(str.slice(1, -1));
  return false;
}
