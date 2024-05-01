//전개연산자 사용시 배열타입정의

const array1: number[] = [1];
const array2: number[] = [2, 3];
const mergeArray: number[] = [...array1, ...array2];

console.log(mergeArray);


//선언형 = 함수형 (lowlevel) 명령형 : highlevel