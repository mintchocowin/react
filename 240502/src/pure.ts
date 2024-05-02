const pure = (a: number, b: number) => {
  return a + b;
};

const impure = (array: number[]) => {
  array.push(1);
  array.splice(0, 1);
};

const global = 10;
const impure02 = (x: number): number => {
  return x + global;
};

//선언형으로 배열의 주요 메서드를 사용하기 위해서 알고 있어야 하는 것
//깊은 복사 얕은 복사