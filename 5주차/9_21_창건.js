function capitalizeWords(arr) {
  if (arr.length === 0) return [];
  const result = arr[0].toUpperCase();
  return [result, ...capitalizeWords(arr.slice(1))];
}
