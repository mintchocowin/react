const data = prompt("문자를 입력하시오");

// const uppercase = () => {
//   const text = data.toUpperCase();
//   console.log(text);
// };

// uppercase();

const solution = (userAnswer) => {
  let answer = "";
  for (let word of userAnswer) {
    if (word === word.toLowerCase()) {
      answer += word.toUppercase();
    } else {
      answer += word;
    }
  }
  return answer;
};
