// import checkType from './getType'
// // import {random, user as RSH} from './getRandom'
// import * as R from './getRandom'

// console.log(_.camelCase('the hello world'))
// console.log(checkType(1,2,3))
// // console.log(random(), random())
// console.log(R)

// // lodash 사용법
// import _ from 'lodash'

// const usersA = [
//   { userId: '1', name:'harrison'},
//   { userId: '2', name:'Neo'}
// ]
// const usersB = [
//   { userId:'1', name:'harrison'},
//   { userId:'3', name:'Amy'}
// ]
// const usersC = usersA.concat(usersB)
// console.log('cnoncat', usersC)
// console.log('uniqBy', _.uniqBy(usersC, 'userId'))

// const usersD = _.unionBy(usersA, usersB, 'userId')
// console.log('unionBy', usersD)

// const users = [
//   { userId: '1', name:'A'},
//   { userId: '2', name:'B'},
//   { userId: '3', name:'C'},
//   { userId: '4', name:'D'},
//   { userId: '5', name:'E'},
// ]

// const foundUser = _.find(users, {name:'C'})
// const foundUserIndex  = _.findIndex(users,{name:'C'})
// console.log(foundUser)
// console.log(foundUserIndex)

// _.remove(users, {name:'A'})
// console.log(users)

// Local Storage
const user = {
  name: 'harrison',
  age: 25,
  eamils:[
    'harrisonryu@naver.com',
    'harrisonryu@google.com'
  ]
}

const str = localStorage.getItem('user')
const obj = JSON.parse(str)
obj.age = 24
console.log(obj)
localStorage.setItem('user',JSON.stringify(obj))