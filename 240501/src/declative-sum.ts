//1~100까지의 숫자를 더하는 코드를 작성(선언형)
import { range } from "./range";
import { fold } from "./Fold";
const numbers: number[] = range(1, 101);

const result = fold(numbers, (result, value) => result + value, 0);
console.log(numbers);
console.log(result);
