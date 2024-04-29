//타입 주석을 달았다!!

// let n: number = 1;
// let b: boolean = true;
// let s: string = "hello";
// let o: object = {};

//타입 불일치 발생! 즉각 경고!

// n = "a";
// b = 1;

//실제 실무에서는 타입 주석 잘 사용안함~!
//타입스크립트는 타입 추론함!
//객체,함수에서는 타입 추론에서 문제 발생해서 그냥 주석 다셈!

// let m = 1;
// let p = "Hello";
// let q = false;
// let obj = {};

// m = "2";

// 3.ts치트키 (*any 타입)

// let any: any = 0;
// any = "number";
// any = true;

//4.ts
// undefined: 값아직 안정함
// null: 엉터리값

//이것들 다 type임

// let unTest: undefined = undefined;

// unTest = "1"

//5.TS 타입의 분류
// -super Type: 받을 수 있는 값이 많아짐
// -sub type: 받을 수 있는 값이 적어짐

// let numTest = 10;

// numTest = undefined;

// let o: object = {
//   name: "MJ",
//   age: 20,
// };

// o = {
//   name: 7,
//   age: 2,
// };
//실무에서 object 타입 거의 안씀!
//object: 객체계의 any임~!
//interface: 객체 안에 들어가 있는 각각의 key & value 타입 정의

// interface IPerson {
//   name: string;
//   age: number;
// }

// let good: IPerson = {
//   name: "mj",
//   age: 20,
// };

//optional property => 선택속성(*객체안에 있어도 되고,없어도 되는 값에 대한 타입을 정의하고자 할 때)

// interface Iperson2 {
//   name: string;
//   age: number;
//   etc?: boolean;
// }

// let good1: Iperson2 = { name: "Paris", age: 20 };

// let good2: Iperson2 = { name: "Paris", age: 20, etc: true };

//익명 interface => 이름 부여하지 않는 interface있을 수 있음
//=>고차함수 사용할 ㄸㅐ 많이 쓰임!

// let ai: {
//   name: string;
//   age: number;
//   etc?: boolean;
// } = {
//   name: "mj",
//   age: 20,
// };

// const printMe = (me: { name: string; age: Number; etc?: boolean }) => {
//   console.log(
//     me.etc ? `${me.name} ${me.age} ${me.etc}` : `${me.name} ${me.age} `
//   );
// };

// printMe(ai);

//class 타입 정의하기
