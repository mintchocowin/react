import { NumberToNumberFunc, add } from "./high-order";

const fn: NumberToNumberFunc = add(1);
const result = fn(2);
console.log(result);
console.log(add(1)(2));


//고차함수는 함수 안에 또 다른 함수를 실행시킨 후 바깥쪽에서 실행된 결과값을 받아서 내부에서 연산 및 처리작업 후 최종 결과값을 출력할 수 있도록 하기 위해 고안된 함수
//클로저는 고차함수를 실행시키기 위한 중요한 JS 개념 중 하나
//변수 : scope => Global / Local 
//함수안에 또다른 함수 구현 : 콜백함수랑 다르다! 매개함수 받는 콜백함수랑 다름. 