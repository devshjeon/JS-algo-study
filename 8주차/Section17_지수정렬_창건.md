#### Radix Sort

지금까지 배운 정렬 방식은 시간 복잡도가 최소 NlogN이다.

하지만, 특정 조건 하에 이 시간 복잡도를 뛰어 넘는 정렬 방식이 있다.

Radix Sort가 그 중 하나인데, 정렬하려는 데이터가 숫자형이어야 한다.

앞서 배운 정렬 방식은 요소를 하나하나 비교하는 방식이었다. 하지만 Radix Sort는 직접 비교를 하지 않는다.



#### 구현(1) Helper 함수들

```javascript
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
```

```javascript
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}
```

```javascript
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(digitCount(nums[i]), maxDigits);
  }
  return maxDigits;
}
```

~~연습 삼아 구현해 본 함수에 비해 너무 간단해서 당황..~~



#### 구현(2) PseudoCode

1. 숫자의 배열을 인자로 받는 함수를 정의한다
2. 가장 큰 숫자의 자릿수를 알아낸다
3. k=0부터 알아낸 자릿수까지 반복문을 실행한다.
   * 숫자 0~9에 해당하는 bucket을 만든다
   * 각 요소의 k번째 숫자와 일치하는 bucket에 요소를 위치 시킨다.
   * bucket 0부터 시작하여 숫자를 꺼내 배열을 만들고, 기존 배열을 대체한다.
4. 정렬된 배열을 반환한다.



#### 구현(3) 실제 코드

```javascript
function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);

  for (let i = 0; i < maxDigitCount; i++) {
    const buckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < nums.length; j++) {
      let digit = getDigit(nums[j], i);
      buckets[digit].push(nums[j]);
    }
    nums = [].concat(...buckets);
  }
  return nums;
}
```

* bucket을 정의할 때 ```new Array.fill([])```을 사용했는데, 모든 요소가 같은 배열 객체를 가리키는 문제가 발생한다. 위의 코드처럼 ```Array.from()```을 활용하여 각각 다른 배열 객체를 가리키도록 해야 함.



#### 시간 복잡도

| Time Complexity(Best) | Time Complexity(Average) | Time Complexity(Worst) | Space Complexity |
| --------------------- | ------------------------ | ---------------------- | ---------------- |
| O(nk)                 | O(nk)                    | O(nk)                  | O(nk)            |

* n: 정렬하려는 배열의 길이

* k: 가장 큰 숫자의 자릿수

* k에 관해서 논란이 있음....

  k가 컴퓨터가 숫자를 메모리에 저장하는 메커니즘 상 logN이라는 것



