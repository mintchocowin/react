const userWord = prompt("영어단어를 입력하세요");

const solution = (userWord) => {
  let answer = "YES";
  const test = userWord.toLowerCase().replace(/[^a-z]/g, "");
  console.log(test);
};

console.log(solution(userWord));
