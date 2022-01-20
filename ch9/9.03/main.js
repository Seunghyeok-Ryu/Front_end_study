// 재사용이 가능
// 변수 선언
let a = 2;
let b = 5;

console.log(a+b); 
console.log(a-b); 
console.log(a*b); 
console.log(a/b);

// 갑(데이터)의 재할당 가능!
let c = 12;
console.log(c);

c=999;
console.log(c);

// 값(데이터)의 재할당 불가!
const d = 12;
console.log(d);

d=888;
console.log(d);  // Error -> 재할당 불가능

