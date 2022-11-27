var majorityElement = function (nums) {
  const counter = {};
  for (let num of nums) {
    counter[num] = counter[num] ? counter[num] + 1 : 1;
    if (counter[num] > nums.length / 2) return num;
  }
};
