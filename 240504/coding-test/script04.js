// const solution = () => {
//   const lastDigits = arr.map((num) => num % 10);
//   const dayDigits = day % 10;
//   const count = lastDigits.filter((digit) => digit === dayDigits).length;
// };

// console.log(solution);
const arr = [25, 23, 11, 47, 53, 17, 33];
const day = Number(prompt("날짜 입력"));

const solution = (day, arr) => {
  let answer = 0;
  for (let car of arr) {
    if (car % 10 === day) answer++;
  }
  return answer;
};

console.log(solution(day, arr));
