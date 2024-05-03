const a = Number(prompt("1숫자 입력"));
const b = Number(prompt("2숫자 입력"));
const c = Number(prompt("3숫자 입력"));
const d = Number(prompt("4숫자 입력"));
const e = Number(prompt("5숫자 입력"));
const f = Number(prompt("6숫자 입력"));
const g = Number(prompt("7숫자 입력"));

const arr = [a, b, c, d, e, f, g];
const align = arr.sort();
const res = arr.sort((a, b) => b - a);
const first = res[0];
console.log(first);
