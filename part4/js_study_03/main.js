const str = `
010-1234-5678
thesecon@gmail.com
http://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

// const regexp = new RegExp('the','gi')
const regexp = /fox/gi
// console.log(regexp.test(str))
console.log(str.replace(regexp, 'AAA'))
// replace 원본에 영향을 끼치지 않음