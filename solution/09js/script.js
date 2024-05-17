const input = prompt("영어를 입력하세요");

const solution = (word) => {
  let answer = word;
  answer = answer.replace(/A/gi, "#");
  return answer;
};

