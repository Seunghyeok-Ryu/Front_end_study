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

// 비교 연산자(comparison operator)

const c = 2;
const d = 2;

console.log(c === d);   // 일치 연산자 (x === y), 일치시 True
console.log(c !== d);   // 불일치 연산자 (x !== d), 불일치시 True
console.log(c >= d);     // 비교 연산자 (x < y), 비교 값이 맞을 시 True
// <= : 이상/이하 < : 미만 초과

// 논리 연산자
const e = 1 === 123;
const f = 'AB' === 'ABC';
const g = false;

console.log(e);
console.log(f);
console.log(g);

console.log('&&: ', e && f && g);      // && 그리고(and)  하나라도 false일시 False
console.log('||: ', e || f || g);      // || 또는(or) 모든 값중 하나라도 true시 True
console.log('!: ', !e);   // !(부정 연산자) True시 False 출력 False시 True 출력

// 삼항 연산자(ternary operator)

const h = 1 < 2;

if (h) {
  console.log('참')
}else {
  console.log('거짓')
};

console.log(h ? '참' : '거짓');   // ? 참이면 앞 부분 거짓이면 뒷부분 실행


// 조건문 if else

import random from './getRandom';   // getRandom.js 에서 가져옴

const i = random()

if(i === 0){
  console.log('i is 0')
} else if(i === 2) {
  console.log('i is 2')
} else if(i === 4) {
  console.log('i is 4')
} else {
  console.log('rest...')
}


// 조건문(Switch statement)

switch (i) {
  case 0:
    console.log('i is 0!')
    break
  case 2:
    console.log('i is 2!')
    break
  case 4:
    console.log('i is 4!')
    break
  default:
    console.log('rest!!')
}


// 반복문 (For statement)
// for (시작조건; 종료조건; 변화조건) {}

const ulEl = document.querySelector('ul');
console.log(ulEl);

for (let j=0 ; j<10; j+=1) {
  const li = document.createElement('li')
  li.textContent = `list-${j + 1}`
  if ((j+1) % 2 === 0) {
    li.addEventListener('click', function () {
      console.log(li.textContent)
    })
  }
  ulEl.appendChild(li)
}

// 변수 유효범위(Variable Scope)
// var, let, const
// let, const 블록 레벨의 유효 범위를 가짐
// var 함수 레벨의 유효 범위를 가짐
function scope() {
  if (true) {
    var k = 123
  }
  console.log(k)
}
scope()