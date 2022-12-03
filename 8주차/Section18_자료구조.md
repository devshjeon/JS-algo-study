## Data Structure

자료구조란 자료(Data), 자료 간의 관계, 자료에 적용할 수 있는 함수의 집합이다. 



여러가지 자료 구조를 배우는 이유?

* 각각의 자료 구조는 뚜렷한 장점이 있다. 따라서, 쓰임새에 따라 다른 자료 구조를 활용할 수 있어야 한다.

  ex) 위치 데이터 => graph

* 실제로 개발 과정에서는 알게 모르게 이미 많은 자료구조가 활용되고 있다.

  ex) DOM: 트리

* **면접과 코테를 잘봐야 하니까..**



## Class

인스턴스를 생성하는 '청사진(blueprint)'

자료 구조를 구현할 때 필수적이다.

* 물론, 자바스크립트에는 딱히 OOP라는 개념이 없고, class는 prototype 상속에 대한 syntatic sugar일 뿐이다.



#### 기본 신택스

```javascript
class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;	// constructor 내의 this는 인스턴스를 가리킨다.
    this.lastName = lastName;
    this.year = year;
  }
}
```

#### 인스턴스 메소드

```javascript
class Student {
  ...
  fullName() {
      return `Your full name is ${this.firstName} ${this.lastName}`
  }
}
```

자바스크립트 클래스에서 몸체 안에 정의한 메소드는 모두 프로토타입 메소드임을 기억하자

#### 클래스 메소드

static 키워드를 사용하여 클래스 메소드를 생성할 수 있다.

```javascript
class Student {
  ...
  static EnrollStudents() {
      return `Enrolling Students`
  }
}
```

프로토타입 메서드와는 달리, **인스턴스를 통해 호출할 수 없다!**

프로토타입에 바인딩 된 것이 아니라, 클래스 자체에 바인딩되어 있기 때문이다.

```javascript
const david = new Student('david', 'Kane', 10);
david.EnrollStudents(); // firstStudent.EnrollStudents is not a function
```

스태틱 메소드는 '유틸리티' 함수라고 생각하면 된다. 각각의 인스턴스와 관련 없는 로직을 수행할 때 쓸 것..(거의 안 나오긴 하겠지만)

