function someRecursive(arr, callback) {
  if ((arr.length = 0)) return false;

  if (callback(arr[0])) return true;

  return someRecursive(arr.slice(1), callback);
}

someRecursive([4, 6, 8], (val) => val > 10);

console.log([8].slice(1));
