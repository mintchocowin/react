//프로그래밍 언어
//2가지 실행관련 지향 방식
//실행문 방식(Imperative Programming),(Procedural Programming)

const arrow1 = (a: number, b: number): number => {
  return a + b;
};

//표현식문 방식(Expression Statement)
//어떠한 프로그래밍 코드를 실행함과 동시에 값을 반환(전달)할 수 있는 언어 뒤이어 많이 선보이게됨

const arrow2 = (a: number, b: number): number => a + b;

//실행문 && 표현식문 => 다중패러다임 언어
//고차함수 && 쿨로져

//표현식 vs 표현식문

const a = 1;
const b = 0;

//표현식
//도출될 결과값을 출력하는 기능까지만 하는 문장~~!!
if (a > b) {
  console.log("a > b");
}

//표현식문
//표현식을 통해서 도출된 결과값을 어딘가에 담아서 관리할 수 있는 종합적인 문장
const isGreator = (a: number, b: number): boolean => a > b;


//콜백함수: JS함수 => 1급시민
//어떤 타입의 매개변수 / 어떤 타입의 결과값을 반환
//함수에 매개변수 함수
//콜백함수 : 타입


