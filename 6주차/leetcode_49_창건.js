/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const sortedStrs = strs.map((word) => word.split('').sort().join('')); // 모든 단어 정렬
  const counter = {};

  for (i = 0; i < strs.length; i++) {
    if (!counter[sortedStrs[i]]) {
      counter[sortedStrs[i]] = [strs[i]]; // 원본 단어 저장
    } else {
      counter[sortedStrs[i]].push(strs[i]);
    }
  }

  return Object.values(counter);
};
