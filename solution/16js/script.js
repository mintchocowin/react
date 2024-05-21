//중복문자제거
const data = prompt("문자");

const solution = (data) => {
  for (let i = 0; i < data.length; i++) {
    if (data.indexOf(data[i]) === i) answer += data[i];
  }
  return answer;
};

console.log(solution(data));
