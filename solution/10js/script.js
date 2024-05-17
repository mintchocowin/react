const str = prompt("단어를 입력하세요!");
const search = prompt("찾고 싶은 단어!");

const solultion = (str, search) => {
  let answer = 0;
  for (let word of str) {
    if (word === search) answer++;
  }
  return answer;
};

console.log(solution(str, search));
