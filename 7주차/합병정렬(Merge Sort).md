## 합병정렬(Merge Sort)

기존의 정렬방식은 비효율적임(n^2). 규모가 커지면 답이 없음.

조금 더 구현 방식이 복잡하지만, 훨씬 효율적인(nlogN) 알고리즘을 적용해야 함.



#### 1. Intro

**Merging + Sorting**

1. 먼저 배열을 가장 작은 단위로 쪼갠다
2. 다시 합쳐나가면서(Merge) 정렬한다.



#### 2. Merging

합병정렬의 핵심은 Merge

두 개의 정렬된 배열을 가지고 합친 후 정렬된 배열을 반환하는 방법?

 ```javascript
 function merge(arr1, arr2) {
   let i = 0;
   let j = 0;
   const result = [];
 
   while (i < arr1.length && j < arr2.length) {
     if (arr1[i] < arr2[j]) {
       result.push(arr1[i]);
       i++;
     } else {
       result.push(arr2[j]);
       j++;
     }
   }
 
   while (i < arr1.length) {
     result.push(arr1[i]);
     i++;
   }
 
   while (j < arr2.length) {
     result.push(arr2[j]);
     j++;
   }
 
   return result;
 }
 ```





#### 3. 구현

```javascript
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));	// recursion
  let right = mergeSort(arr.slice(mid));	// recursion
  return merge(left, right);
}
```



#### 4. 빅오

| Best  | Average | Worst | Space |
| ----- | ------- | ----- | ----- |
| nlogN | nlogN   | nlogN | O(n)  |

* logN? 배열을 쪼개는 과정
* nlogN? 합치는 과정에서 비교할때 logN
* 배열자체를 쪼개고 하나식 저장해야 하기 때문에, 공간복잡도는 O(n)



