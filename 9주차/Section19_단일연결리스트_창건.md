## Singly Linked List(단일 연결 리스트)



여러 개의 노드가 연결되어 리스트를 이루는 구조

노드에는 데이터와 다음 노드를 가리키는 '링크' 정보를 가지고 있다.



#### 배열 vs 단일 연결 리스트

| 배열                                      | 리스트                  |
| ----------------------------------------- | ----------------------- |
| index   O                                 | index X                 |
| 삽입, 삭제가 어렵다; 인덱싱을 다시 해야됨 | 삽입 삭제가 비교적 쉽다 |
| 인덱스 덕에 접근이 빠르다                 | 'Random Access' 불가능  |



#### 구현

```javascript
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(val) {
    var newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (this.length === 0) return undefined;
    else {
      var current = this.head;
      var newTail = current;
      while (current.next) {
        newTail = current;
        current = current.next;
      }
      this.tail = newTail;
      this.tail.next = null;
      this.length--;
      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }
      return current;
    }
  }
  // 맨 앞에 것 제거
  shift() {
    if (this.length === 0) return undefined;
    else {
      var currentHead = this.head;
      this.head = currentHead.next;
      this.length--;
      if (this.length === 0) {
        this.tail = null;
      }
      return currentHead;
    }
  }
  // 맨 앞에 추가
  unshift(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    var counter = 0;
    var current = this.head;
    while (index !== counter) {
      current = current.next;
      counter++;
    }
    return current;
  }
  set(index, value) {
    var foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = value;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    var newNode = new Node(val);
    var prev = this.get(index - 1);
    var temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
  remove(index, val) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();

    var prev = this.get(index - 1);
    var removed = prev.next;
    prev.next = removed.next;
    this.length--;
    return removed;
  }
  print() {
    var arr = [];
    var current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
  reverse() {
    var node = this.head;
    this.head = this.tail;
    this.tail = node;

    var prev = null;
    var next;
    for (var i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}
```



#### 빅오

| insertion | Removal     | Searching | Access |
| --------- | ----------- | --------- | ------ |
| O(N)      | O(1) ~ O(N) | O(N)      | O(N)   |

* Insertion(삽입): 어디에 삽입하든 O(1)

  배열은 요소를 삽입하고, 인덱싱을 새로 해줘야 하기 때문에 훨씬 오래 걸림; O(N)

* Removal(삭제)

  맨앞의 요소를 삭제하는 경우, shift()만 사용하면 되기 때문에 O(1)

  마지막 요소를 삭제하는 경우 전체 리스트를 순회하기 때문에 O(n)

* Searching(검색)

  리스트를 순회해야 하기 때문에 O(N)

* Access(접근)

  리스트를 순회하기 때문에 O(N)

  배열은 인덱스 때문에 훨씬 빠르게(O(1)) 접근 가능



#### 정리

1. insertion, 그리고 head를 deletion하는 경우에는 배열의 대체재 역할 가능
2. 배열과 가장 큰 차이점은 index가 없다는 것
3. Stack, Queue는 Linked List에 기초를 두고 있음