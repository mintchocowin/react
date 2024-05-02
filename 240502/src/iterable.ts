//반복문을 사용할 수 있는 객체 => iterable객체
//iterable한 객체가 되기 위해서는 iterator 속성값이 존재해야한다
//참조타입 자료: 객체&배열
//객체,배열 => 반복문 :: generator

const numArray: number[] = [1, 2, 3];
for (let value of numArray) {
  console.log(value);
}


//generator 사용하면 iterable객체가 된다!
//next()가 정해줌



