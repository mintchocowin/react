import { arrayLength, isEmpty } from "./arrayLength";

interface IPerson {
  name: string;
  age: number;
}

const numArray: number[] = [1, 2, 3];
const strArray: string[] = ["Hello", "Javascript"];
const personArray = [{ name: "David" }, { name: "Jane", age: 32 }];

console.log(
  arrayLength(numArray),
  arrayLength(strArray),
  arrayLength(personArray),
  isEmpty([1]),
  isEmpty([])
);


