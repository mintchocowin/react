//객체 줄임 표기법

// const name = "david";
// const age = 20;

// const person = {
//   name,
//   age,
// };

// console.log(person);

//구조분해할당

// const person = {
//   name: "david",
//   age: 20,
// };

// const name = person.name;
// const age = person.age;

// const { name, age } = person;

// console.log(name, age);

//전개연산자(spread operator)
// const arr = [1, 2, 3, 4];
// const [a, b, ...rest] = arr;
// console.log(a, b, rest);

//깊은 복사 (feat.참조타입 자료)

// const person = {
//   name: "david",
//   age: 20,
// };

// const person2 = person;
// const person3 = { ...person };

// console.log(person2, person3);
// console.log(person == person2);
// console.log(person == person3);

//삼항조건연산자
// const coffee = null;
// console.log(coffee ? coffee.name : "there is no coffee");

//조건부 랜더링
//단락회로평가

const coffee = {
  name: "americano",
  price: 2000,
};

// const coffee = null;
// if (coffee) {
//   console.log(coffee.name);
// } else {
//   console.log("there is no coffee");
// }

// const result = coffee.name && coffee.price;

const result = coffee?.price;
console.log(result);
