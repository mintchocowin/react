const data = prompt("문자를 입력하세요");

const solution = (data) => {
  let answer = "";
  //사용자가 입력한 문자열의 정가운데를 정의하는 기준값 필요
  let middle = Math.floor(data.length / 2);
  //substring(a,b)
  if (data.length % 2 === 1) {
    answer = data.substring(middle, middle + 1);
  } else {
    answer = data.substring(middle - 1, middle + 1);
  }
  return answer;
};

console.log(solution(data));

// if (Number(data.length) % 2 == 1) {
// } else {
// }
