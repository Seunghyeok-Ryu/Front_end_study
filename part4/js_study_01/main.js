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