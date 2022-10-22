## Section7: 재귀



#### 재귀(recursion)란?

**Fuction that calls itself**

자기 자신을 호출하는 함수

* JSON.parse, Json.stringify, document.getElementById 등이 재귀를 이용한다.
* 나중에 배우게 될 자료구조(ex 트리)에서도 많이 보게 될것!



#### Call Stack

자바스크립트 엔진은 함수 제어를 위해 '스택' 자료 구조를 이용한다.

스택은 FILO!

재귀는 계속해서 새로운 함수를 호출하므로, 스택 자료 구조를 활용하는 대표적인 예시다.



#### 첫 재귀 함수 만들기

재귀에서 가장 중요한 두 가지~

* **BASE CASE**

  재귀가 끝나는 조건! 한글로는 보통 '탈출 조건'이라고 표현하는 것 같다.

* **Different Input**

  같은 함수를 반복 호출하는데 인풋이 똑같으면 안되겠죠?


```javascript
function countDown(num) {
    if (num <= 0) {	// Base Case
    console.log('all done!')
    return;
    }
    console.log(num);
    num--;			// Different Input
    countDown(num);
}
```



#### 두번째 재귀 함수: 합

```javascript
function sumRange(num) {
	if (num === 1) return 1;		// Base Case
	return num + SumRange(num - 1); // Different Input
}
```

핵심은 콜스택을 통해 함수 호출이 어떻게 제어되는지 이해하는 것!

sumRange(1)이 가장 먼저 종료(return)되고 주루루루룩 이어지는 흐름



### 세번째 재귀 함수: 팩토리얼

* 반복문을 통해 팩토리얼 구현하기

```javascript
function iterativeFactorial(num) {
  let total = 1;
  for(let i = num; i > 1; i--) {
    total *= 1;
  }
  return total;
}
```

* 재귀를 통해 팩토리얼 구현하기

```javascript
function recursiveFactorial(num) {
  if (num === 1) return 1;				// 리턴문이 없으면 Maximum Call Stack size 에러!
  return num * recursiveFactorial(num-1)
}
```

* 재귀를 사용할 때 주의 사항 세 가지
  1. Base Case
  2. Return
  3. Stack overflow(위의 예시에 음수가 인풋으로 주어진다면?)





#### Helper Method Recursion

```javascript
function collectOddValues (arr) {
  let result = []; // 

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0])
    }
    helper(helperInput.slice(1))
  }

  helper(arr);
  
  return result;
}
```

* collectOddValues 자체를 재호출 하면 **result가 초기화**되니까, helper method를 재귀 호출한다.
* 자료 구조 배울 때 많이 보이는 패턴~



#### Pure Recursion

앞서 Helper Method로 구현한 함수를 순수 재귀로 풀어보자

```javascript
function collectOddValues(arr) {
  let newArr = [];
  
  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0])
  }
  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}
```

헬퍼를 쓰는게 좀 더 직관적이긴 하다...!



**Tips**

* 배열의 경우, slice, spread operator, concat을 활용하면 됨
* 문자열의 경우, slice, substr, substring
* 객체: Object.assign, spread operator





