// // const studentA = {
// //   name: "짱구",
// //   grade: "A",
// //   age: 22,
// //   study() {
// //     console.log("죽도록 공부함");
// //   },
// //   introduec() {
// //     console.log("안녕하세욥!");
// //   },
// // };
// // const studentB = {
// //   name: "MJ",
// //   grade: "A++",
// //   age: 20,
// //   study() {
// //     console.log("죽도록 공부안함");
// //   },
// //   introduec() {
// //     console.log("안녕하세욥!");
// //   },
// // };

// class Student {
//   name;
//   grade;
//   age;

//   //생성자 함수
//   //매개변수 받은 것들
//   constructor(name, grade, age) {
//     this.name = name;
//     this.grade = grade;
//     this.age = age;
//   }
//   study() {
//     console.log("열심히 공부함!");
//   }
//   introduce() {
//     console.log(`hello${this.name}입니다!`);
//   }
// }

// const studentA = new Student("짱구", "A+", 22);
// console.log(studentA);
// studentA.introduce();

// class StudentDeveloper extends Student {
//   favoriteSkill;
//   constructor(name, grade, age, favoriteSkill) {
//     super(name, grade, age);
//     this.favoriteSkill = favoriteSkill;
//   }
//   //메서드
//   programming() {
//     console.log(`${this.favoriteSkill}로 프로그래밍함!`);
//   }
// }

// const studentB = new StudentDeveloper("슛돌이", "B", 21, "JAVASCRIPT");
// studentB.programming();

// //TS Class를 생성하거나 상속하는 개념 거의 동일, 살짝 접근제어자!
