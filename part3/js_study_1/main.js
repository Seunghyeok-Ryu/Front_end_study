// getType.js에서 가져옴 (import data from)
import getType from './getType'   

console.log(typeof 'hello world');

// 함수를 통한 type 확인
console.log(getType(123));
console.log(getType(false));
console.log(getType(null));
console.log(getType({}));
console.log(getType([]));
