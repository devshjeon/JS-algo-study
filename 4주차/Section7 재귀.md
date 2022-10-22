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



#### 두번째 재귀 함수

```
function sumRange
```

