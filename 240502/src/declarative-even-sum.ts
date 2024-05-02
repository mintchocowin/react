const numbers: number[] = range(1, 101);
const idOdd = (n: number): boolean => n % 2 === 0;
const result =fold(filter(numbers,idOdd)),(result.value)=>result+value,0