// const text = document.querySelector(".text");
// const button = document.querySelector(".button");

// console.log(text);
// console.log(button);

// //배열로 , 값을 받기
// //배열에서 최소값 찾기
// //내림차순, 맨 앞에 값 받기
// //보여주기

// button.addEventListener("click", (e) => {
//   e.preventDefault();
//   const data = text.value;
//   console.log(data);
// });

const a = Number(prompt("첫 번째 숫자"));
const b = Number(prompt("두 번째 숫자"));
const c = Number(prompt("세 번째 숫자"));

const solution = (a, b, c) => {
  let answer;
  if (a < b) {
    answer = a;
  } else {
    answer = b;
  }
  if (c < answer) answer = c;
  return answer;
};

console.log(solution(a, b, c));
