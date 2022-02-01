// 숫자 데이터
const pi = 3.14159265358979
console.log(pi)

const str = pi.toFixed(2)
console.log(str)
console.log(typeof str)

const integer = parseInt(str)
const float = parseFloat(str)

console.log(integer)
console.log(float)
console.log(typeof integer, typeof float)

console.log('abs: ', Math.abs(-12))

console.log('min: ', Math.min(2,8))

console.log('max: ', Math.max(2,8))

console.log('ceil: ', Math.ceil(3.14))

console.log('round: ', Math.round(3.5))

console.log('random: ', Math.random())


// 배열(Array)
const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

// .length 배열의 길이(item 개수)
console.log(numbers.length)
console.log(fruits.length)
console.log([1,2].length)

console.log([].length)

// .concat()
console.log(numbers.concat(fruits))

// .forEach()
fruits.forEach(function (item, i){
  console.log(item, i)
})

// .map
const a = fruits.forEach((fruit, index) => {
  console.log(`${fruit}-${index}`)
})
console.log(a)

const b = fruits.map((fruit, index) => ({
  id: index,
  name: fruit
}))
console.log(b)

// .filter()
const c = numbers.map(number => number < 3)
console.log(c)

const d = numbers.filter(number => number < 3)
console.log(d)

// .find() .findIndex()

const e = fruits.find(fruit => /^B/.test(fruit)     // 정규표현식 B로 시작하는 단어 true 반환 함수 종료
)
console.log(e)

const f = fruits.findIndex(fruit => /^C/.test(fruit))
console.log(f)

// .includes()

const g = numbers.includes(3)
console.log(g)

const h = fruits.includes('HI')
console.log(h)

  // .push()  .unshfit()
// 원본 수정됨 주의!

// numbers.push(5)
// console.log(numbers)

// numbers.unshift(0)
// console.log(numbers)

  // .reverse()     원본 수정

// numbers.reverse()
// fruits.reverse()

// console.log(numbers)
// console.log(fruits)

  // .splice()    원본 수정

// numbers.splice(1, 2, 99)
// console.log(numbers)

// fruits.splice(2, 0 , 'orange')
// console.log(fruits)

// 객체(Object)

// .assign()
const userAge = {
  name: 'Heropy',
  age: 24
}
const userEmail = {
  name: 'ffffaa',
  email: 'harrisonryu@naver.com'
}

const target = Object.assign({}, userAge, userEmail)
console.log(target)
console.log(userAge)
console.log(target === userAge)

const i = { k : 123}
const j = { k : 123}
console.log(i === j)

// .keys()
const user = {
  name : 'harrisonryu',
  age : 25,
  email : 'harrisonryu@naver.com'
}

const keys = Object.keys(user)
console.log(keys)

console.log(user['email'])

const values = keys.map(key => user[key])
console.log(values)

// 구조 분해 할당(Destructuring assignment)

const {name, age: ages, address = 'Korea'} = user

console.log(`사용자의 이름은 ${name}입니다.`)
console.log(`${name}의 나이는 ${ages}세 입니다.`)
console.log(`${name}의 이메일 주소는 ${user.email}입니다.`)
console.log(address)

const [aaa, , ccc, ddd] = fruits
console.log(aaa,ccc,ddd)

// 전개 연산자(Spread)
console.log(fruits)
console.log(...fruits)
fruits.push('orange')

const toObject = (aa, bb, ...cc) => ({aa, bb, cc})
console.log(toObject(...fruits))
fruits.splice(3,1)

// 데이터 불변성(Immutability)

// 원시 데이터
let k = 1
let l = 4
console.log(k, l, k === l)
l = k
console.log(k, l, k === l)
k = 7
console.log(k, l, k === l)
let m = 1     // 원시 데이터 : 이미 만들어진 k = 1 이라는 메모리를 바라보게 함
console.log(l, m, l === m)    // 같은 메모리를 바로보고 있음으로 True

// 참조형 데이터
let n = { k : 1 }
let o = { k : 1 }       // 생김새가 같더라도 서로 다른 메모리에 할당
console.log(n, o, n === o)    // 서로 다른 메모리를 바라보고 있음(False)
n.k = 7
o = n     // n을o로 넣어줌 -> 같은 메모리를 바라보게 됨.
console.log(n, o ,n === o)    // True
n.k = 2   // n 내부 k 값을 바꿔줌.  n,o는 계속해서 같은 메모리를 바라보고 있음으로 두게 모두 바뀜
console.log(n, o, n === o)  // n,o {K:2} 로 바뀜(True)
let p = o     // o={k:2}를 p로 할당 같은 메모리를 바라봄.
console.log(n, o, p, n === p)   // 모두 {k:2} 같은 메모리(True)
n.k = 9   // n,o,p 모두 {k:9}로 할당 
console.log(n, o, p, n === p)   // 여전히 같은 메모리(True)
      // 하나의 값을 바꿨을 때 다른 값도 바뀔 수 있음 주의!


// 얕은 복사(Shallow copy), 깊은 복사(Deep copy)
import _ from 'lodash'


const oner = {
  name: 'harrisonryu',
  age: 25,
  emails: ['harrisonryu@naver.com']
}
// const copyOner = Object.assign({}, oner)   얕은 복사
// 새로운 객체에 oner를 넣고 Object.assign에 넣고 반환. 새로운 메모리에 할당

// const copyOner = {...oner}  // 전개 연사자로 복사 방법  얕은 복사

const copyOner = _.cloneDeep(oner)  // lodash를 이용한 깊은 복사

console.log(copyOner === oner)  // 서로 다른 메모리에 할당됨

oner.age = 22   // 서로 다른 객체 데이터에 영향을 끼치지 않음
console.log('oner', oner)
console.log('copyOner', copyOner)  


oner.emails.push('neo@naver.com')
console.log(oner.emails === copyOner.emails)
console.log('oner', oner)
console.log('copyOner', copyOner)