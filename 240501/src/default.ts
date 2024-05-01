interface IPerson {
  name: string;
  age: number;
}

//템플릿 리터럴: 문자 => 변수를 문자열로 찾아와서 값을 사용하고자 할 때
//리터럴 타입: 문자 타입
//타입정의 : 주석처리
//숫자 : number, 문자 : string
//추론 : "hello" = > 타입 정의 => 문자~!
//변수안에 담기는 value값을 가지고 타입을 추론할 때, 리터럴 타입이 작동!
//타입구조도
//슈퍼타입 <-> 서브타입
//number : 슈퍼타입
//10: 서브타입

// const makePerson = (name: string, age: number = 10): IPerson => {
//   const person = { name: name, age: age };
//   return person;
// };

//값을 바깥으로 내뱉어야하기 때문에 실행문 사용해야함!
// console.log(makePerson("David"));
// console.log(makePerson("David", 20));

//표현식 문으로 가능~
const makePerson = (name: string, age: number = 10): IPerson => ({
  name,
  age,
});
