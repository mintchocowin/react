const arr = [5, 7, 11, 2, 15, 17, 3];
const solution = () => {
  //변수:어떠한 값을 담을 수 있는 그릇
  let answer;
  let min = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  answer = min;
  return answer;
};
console.log(solution(arr));
