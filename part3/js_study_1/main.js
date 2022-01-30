// getType.js에서 가져옴 (import data from)
import getType from './getType'   

console.log(typeof 'hello world');

// 함수를 통한 type 확인
console.log(getType(123));
console.log(getType(false));
console.log(getType(null));
console.log(getType({}));
console.log(getType([]));

// 산술 연산(arithmetic operator)
console.log(1 + 2);
console.log(5 - 7);
console.log(3 * 4);
console.log(10 / 2);
console.log(7 % 5);     // 나머지 연산자(%)

// 할당 연산자(assignment operator), const(재할당 불가)

let a = 2;
// a = a + 1;
a += 2;     // +대신 다른 산술연산자(/,*,%,-) 모두 사용 가능
console.log(a);
