const arr = [87, 70, 100];

let average = 0;

for (let i = 0; i < arr.length; i++) {
  average += arr[i];
}

average /= arr.length;

console.log(average);


//good code란 
//1.확장성이 있는 코드
//2.재사용 = 재활용이 가능한.