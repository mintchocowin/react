import { range } from "./range";
import { map } from "./map";
import { fold } from "./fold";

const numbers: number[] = range(1, 101);
const result = fold(
  map(numbers, (value) => value * value),
  (result, value) => result + value,
  0
);


console.log(result);
