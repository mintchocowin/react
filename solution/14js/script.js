const data = prompt("숫자를 입력하세요");

const arr = [5, "teacher", "time", "student", "beautiful"];
const solution = () => {
  let answer = "";
  //js에서 사용가능한 가장 작은 정수값
  let max = Number.MIN_SAFE_INTEGER;

  for (let text of arr) {
    if (text.length > max) {
      max = text.length;
      answer = text;
    }
  }
  return answer;
};
console.log(solution(arr));
//Number(data) 사용해서 prompt 반복문 만들기
//숫자들만큼 문자 다 받고  문자 가장 긴 것 출력
