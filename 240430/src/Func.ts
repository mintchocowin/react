function add(a: number, b: number): number {
  return a + b;
}

const add1 = function (a: number, b: number): number {
  return a + b;
};

const add2 = (a: number, b: number) => {
  return a + b;
};

function printMe(name: string, age: number): void {
  console.log(`name:${name},age:${age}`);
}

interface Product {
  name: string;
  price: number;
}

const goods: {
  name: string;
  price: number;
} = {
  name: "색연필",
  price: 2000,
};

const printMe01: (arg0: string, arg1: number) => void = function (name, price) {
  console.log(`${name}은 ${price} 입니다`);
};
