//배열을 활용해서 반복적인 액션

const arr: string[] = ["Jack", "James", "Steve"];

for (let name of arr) {
  console.log(name);
}


//제너릭 타입: 종합적인 타입
//배열의 타입을 정의하는데 배열안에 들어가야하는 타입이 1가지 종류가 아닌경우,
//그리고 배열내 들어가야하는 타입의 형태가 변환되는 경우