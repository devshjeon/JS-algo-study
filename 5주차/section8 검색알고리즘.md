#### Linear Search (선형 검색)

* 모든 요소를 순회

* indexOf 메소드가 선형 검색을 사용한다.

* 예제 (indexOf)

  ```javascript
  function findValue(array, value) {
    for (let i = 0; i< array.length; i++) {
      if(array[i] === value) {
        return i;
      }
    }
    return -1;
  }
  ```



* 빅오: <strong>O(n)</strong>





#### Binary Search (이진 검색)

* **정렬된** 요소들은 더 효과적으로 검색할 수 있음

* <strong>Divide and Conquer</strong> 방식으로, 의사 코드는 다음과 같음

  ```javascript
  // 정렬된 함수와 찾는 값을 인자로 받음
  // left, right pointer를 양끝에 만든다
  // left와 right 사이의 중간값을 찾는 값과 비교
  // 찾는 값보다 작으면, left를 이동
  // 찾는 값보다 크면, right를 이동
  // left 가 right를 넘어가기 전까지만 반복하고, 찾지 못하면 -1을 반환
  ```

* 실제 코드

  ```javascript
  function binarySearch(arr, elem){
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
  
    while(arr[middle] !== elem && start <= end) { // start <= end 중요
      if (elem < arr[middle]) end = middle - 1;
      else start = middle + 1;
      middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
  }
  ```

* 빅오: O(logN)

  "2를 몇번 곱해야 N이 되는가..?"라고 생각하면 된다.




#### Naive String Search

* 브루트포스 형식의 문자열 검색

* 긴 문자열과, 짧은 문자열을 이중 반복문으로 돌리는 간단한 방식

* 예제

  ```javascript
  function naiveSearch(long, short) {
    let count = 0;
  
    for(let i = 0; i <= long.length - short.length; i ++) {
      for(let j = 0; j< short.length;j++) {
        if (short[j] !== long[i + j]) break;
        if (j === short.length - 1) count++;
      }
    }
  
    return count;
  }
  ```