## Section 9: 버블 정렬



#### 정렬 알고리즘 소개

* 정의: 정렬이란 컬렉션 내의 요소를 특정한 순서로 재배치 하는 것이다.

  ex) 숫자를 오름차순 or 내림차순으로 정렬하기

* 자바스크립트도 내장 sort 메소드가 있음

* 여러 가지 정렬 알고리즘이 있고, 각자 장단이 있음



#### 자바스크립트 빌트인 sort

* compare function이 없을 때: 요소를 문자열로 바꾼뒤, 유니코드를 기준으로 정렬해줌

* compare function이 있을 때

  (a, b)에 대한 리턴 값이

  * 양수: b, a
  * 음수: a, b

  ```javascript
  [1, 7, 3, 4, 99, 22, 100].sort((a, b) => a - b) // [1, 3, 4, 7, 22, 99, 100]
  ```



#### 버블 정렬

```"largest values Bubble up to the top"```

아이디어: 가장 큰 숫자를 배열 뒤로 밀어내는 과정을 반복



* PseudoCode

  ```
  1. i 인덱스를 통해 배열의 끝에서 처음으로 반복
  2. j 인덱스를 통해 배열의 처음부터 i - 1 인덱스까지 반복
  3. arr[j]와 arr[j+1]를 비교하고 스왑
  4. 정렬된 배열을 반환
  ```

* 구현

  ```javascript
  function bubbleSort(arr) {
    for (let i = arr.length; i > 0; i--) {
      for (let j = 0; j < i - 1; j++) {
        if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    return arr;
  }
  ```

* 최적화

  버블정렬은 의미없는 반복을 수행할 수 있다.

  [8, 1, 2, 3, 4, 5, 6, 7]을 버블정렬한다면, 단 한번의 반복으로 정렬이 완료되지만,

  이중 반복문은 끝까지 수행된다.

  이 때,  이전 반복에서 스왑이 일어나지 않았다는 것을 확인하고 반복을 종료할 수 있다.

  ```javascript
  function bubbleSort(arr) {
    for (let i = arr.length; i > 0; i--) {
      let noSwaps = true;	// 스왑이 일어나는지 확인하는 변수
      for (let j = 0; j < i - 1; j++) {
        console.log(arr);
        if (arr[j] > arr[j + 1]) {
          noSwaps = false;
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
      if (noSwaps) break; // 스왑이 없었다면 반복문 빠져나오기
    }
    return arr;
  }
  ```



* bigO: n^2