//최소 홀수값과 홀수 합한 것 고르기

const arr = [12, 77, 38, 41, 53, 92, 85];

// for (let i = 0; i < arr.length; i++) {

//   const odd = arr[i] % 2n+ 1  == 0;
//   console.log(odd);
// }

const solution = (arr) => {
  let answer = [];
  let sum = 0;
  let min = Number.MAX_SAFE_INTEGER;
  for (let num of arr) {
    if (num % 2 === 1) {
      sum += num;
      if (num < min) min = num;
    }
  }
  answer.push(sum);
  answer.push(min);
  return answer;
};

console.log(solution(arr));
