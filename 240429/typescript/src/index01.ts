// class Person1 {
//   name?: string;
//   age?: number;
// }

// let david = new Person1();
// david.name = "jack";
// david.age = 20;

// console.log(david);

//접근제어자를 활용해서 field값을 생략할 수 있음!!><
class Person2 {
  constructor(public name: string, public age?: number) {}
}

let jack2: Person2 = new Person2("jack", 32);

console.log(jack2);

class Person3 {
  name: string;
  age?: number;

  constructor(name: string, age?: number) {
    this.name = name;
    this.age = age;
  }
}

let jack3: Person3 = new Person3("jack", 20);

// interface 응용
// interface: 객체의 세부 타입 정의
//class 선언 할 때 참고 활용!
//class가 interface를 참고해서 객체를 구현할 때에는 implement
//반드시 implement를 하기로 한 인터페이스 객체를 구현!!~~!!