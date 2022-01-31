// 예제
// function User (first, last) {
//   this.firstName = first
//   this.lastName = last
// }
// User.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`
// }

// const heropy = new User('Heropy', 'Park')   // new : 생성자 함수 (객체 데이터)
// const amy = new User('Amy', 'Clarke')
// const neo = new User('Neo', 'Smith')

// console.log(heropy.getFullName())
// console.log(amy.getFullName())
// console.log(neo.getFullName())

// this
// 일반(Normal) 함수는 호출 위치에서 따라 this 정의
// 화살표(Arrow) 함수는 자신이 선언된 함수 범위에서 this 정의!

// 예제
// const heropy = {
//   name: 'Heropy',
//   normal: function () {
//     console.log(this.name)
//   },
//   arrow: () => {
//     console.log(this.name)
//   }
// }
// heropy.normal()
// heropy.arrow()

// const amy ={
//   name: 'Amy',
//   normal: heropy.normal,
//   arrow: heropy.arrow
// }

// amy.normal()
// amy.arrow()

// 예제
// function User(name) {
//   this.name = name
// }
// User.prototype.normal = function () {
//   console.log(this.name)
// }
// User.prototype.arrow = () => {
//   console.log(this.name)
// }
// const heropy = new User('Heropy')

// heropy.normal()
// heropy.arrow()


// 예제   보통 setTimeout 함수 사용시 화살표 함수 사용
// const timer = {
//   name: 'Heropy!!',
//   timeout: function () {
//     setTimeout( () => {      // setTimeout(함수, 시간)
//       console.log(this.name)
//     }, 2000)
//   }
// }
// timer.timeout()

// ES6 Classes

// 예제
// const heropy ={
//   name: 'Heropy',
//   normal () {     // normal: function (:function 생략 가능)
//     console.log(this,this.name)
//   },
//   arrow: () => {
//     console.log(this.name)
//   }
// }

// heropy.normal()
// heropy.arrow()

// ES6 Classes

// function User(first, last){
//   this.firstName = first
//   this.lastName = last
// }
// User.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`
// }
// 위 내용 아래로 간단화
// class User {
//   constructor (first, last) {
//     this.firstName = first
//     this.lastName = last
//   }
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`
//   }
// }

// const heropy = new User('Heropy', 'Park')
// const amy = new User('Amy', 'Clark')

// console.log(heropy)
// console.log(amy.getFullName())

class Vehicle {
  constructor(name, wheel) {
    this.name = name
    this.wheel = wheel
  }
}
const myVehicle = new Vehicle('운송수단', 2)
console.log(myVehicle)


class Bicycle extends Vehicle {     // extends 확장(상속)
  constructor(name, wheel) {
    super(name,wheel)
  }
}
const myBicycle = new Bicycle('삼천리', 2)
const daughtersBicycle = new Bicycle('세발',3)

console.log(myBicycle)
console.log(daughtersBicycle)


class Car extends Vehicle {
  constructor(name, wheel, license) {
    super(name, wheel)
    this.license = license
  }
}
const myCar = new Car('벤츠',4, true)
const daughtersCar = new Car('포르쉐', 4, false)

console.log(myCar)
console.log(daughtersCar)