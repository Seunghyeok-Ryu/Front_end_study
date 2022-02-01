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


// 배열
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

