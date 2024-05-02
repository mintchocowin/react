const a = Number(propmt("첫 번째 숫자"));
const b = Number(propmt("두 번째 숫자"));
const c = Number(propmt("세 번째 숫자"));

const solution = (a, b, c) => {
  let answer = "YES";
  let max;
  let tot = a + b + c;

  if (a > b) {
    max = a;
  } else {
    max = b;
  }
  if (c > max) max = c;
  if (tot - max <= max) answer = "No";
  return answer;
};
