// interface Book {
//   name: string;
//   price: number;
// }

// interface ProgrammingBook {
//   name: string;
//   price: number;
//   skill: string;
// }

// let programmingBook = {
//   name: "자바",
//   price: 3000,
//   skill: "react",
// };
// let book2: Book = programmingBook;

// let book = programmingBook;

// const func = (book: Book) => {};

// func(programmingBook);

// //
// let a: number | string | boolean = 1;
// a = "hello";
// a = true;

// let arr: (number | string | boolean)[] = [1, "hello", true];

// type Dog01 = {
//   name: string;
//   color: string;
// };

// const test = () => {
//   type Dog = {
//     name: string;
//     color: string;
//   };
// };

// type Person01 = {
//   name: string;
//   language: string;
// };

// type Union01 = Dog01 | Person01;

// let union1 = {
//   name: "",
//   color: "",
// };

// type Intersaction = Dog01 & Person01;

// let union5: Intersaction = {
//   name: "",
//   color: "",
//   language: "",
// };

// interface Person02 {
//   name: string;
//   age: number;
// }

// //사용자가 어떤 버튼을 클릭한다면, 아래 빈 객체안에 name,age값이 포함될 예정이다!!

// let person = {} as Person02;

// let numb4 = 10 as never;

// let num5 = 10 as unknown as string;

// const food = ["pizza", "mango", "kimchi", "kimbab"];
// const front = ["pizza"];
// const back = ["kimchi", "kimbab"];

// const final = [...front, "kim", ...back];
