const str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
`

// const regexp = new RegExp('the','gi')

// console.log(regexp.test(str))
// console.log(str.replace(regexp, 'AAA'))
// replace 원본에 영향을 끼치지 않음

// \. -> 특수 문자(.)앞에 문자로 보기 위해 사용
console.log(
  str.match(/\b\w{2,3}\b/g)
)

