const data = prompt("문자를 입력하시오");

// const count = () => {
//   const result = data.match(/[A-Z]/g);
//   console.log(result.length);
// };

// count();

//ㅠㅠ

const solution = (word) => {
  let answer = 0;
  for (let b of word) {
    if (b === b.toUpperCase()) answer++;
  }
  return answer;
};

console.log(solution(word));
