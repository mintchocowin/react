// const data = prompt("문자를 입력하시오");

// const solution = (data) => {
//   let answer = "";
//   for (let word of data) {
//     if (word == word.toLowerCase()) {
//       answer += word.toUppercase();
//     }
//   }
// };

const userInput = prompt("영단어 입력");

const solution = (userInput) => {
  let answer = "";
  for (let k of userInput) {
    if (k === k.toUpperCase()) {
      answer += k.toLowerCase();
    } else {
      answer += k.toUpperCase();
    }
  }
  return answer;
};

console.log(solution(userInput));
