const str = `
010-1234-1234
thesecon@gmail.com
http://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

// const regexp = new RegExp('the','gi')
const regexp = /the/gi
console.log(str.match(regexp))