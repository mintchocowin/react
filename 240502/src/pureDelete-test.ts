import { pureDelete } from "./pureDe.ete";

const mixedArray: object[] = [
  [],
  { name: "David" },
  { name: "Jane", age: 20 },
  ["Javascript"],
];

const objectOnly: object[] = pureDelete(mixedArray, (value) =>
  Array.isArray(value)
);

console.log(mixedArray, objectOnly);
