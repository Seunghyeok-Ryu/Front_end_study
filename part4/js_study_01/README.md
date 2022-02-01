# JS 데이터(Data)

- string : "", '', ``
- Number
- Boolean : true, false
- undefined 
- null
- Araay: []
- Object: {}

# 문자
## .indefOf('')
- 주어진 값과 일치하는 첫번째 인덱스 출력
- 일치하는 값이 존재하지 않으면 -1 출력

## .slice(숫자1, 숫자2)
- 문자열의 일부를 추출

## .relpace('문자1', '문자2')
- 문자1을 제거하고 문자2로 대체

## 정규표현식
- .match(/.+(?=@)/)

## .trim()
- 앞뒤 공백문자 제거

# 숫자
## .toFixed(숫자)   //  문자데이터로 출력됨
- 소수점(숫자) 만큼 출력

## parseInt() // 전역함수 (숫자 데이터)
- 문자데이터를 분석해서 숫자만 추출해서 정수로 출력

## parseFloat() // 전역함수 (숫자 데이터)
- 문자데이터를 분석해서 숫자만 추출해서 소수점 유지후 출력

## Math.abs()
- 주어진 숫자의 절대값을 반환

## Math.min(숫자1, 숫자2)
- 두 숫자중 작은 수 출력

## Math.max(숫자1, 숫자2)
- 두 숫자중 큰 수 출력

## Math.ceil(3.14)
- 올림 후 출력 -> 4

## Math.floor(3.14)
- 내림 처리 후 출력 -> 3

## Math.round(3.14)
- 반올림 후 출력

## Math.random()
- random한 숫자 출력



# 배열(Array)

## find()
- 주어진 판별 함수를 만족하는 첫 번째 요소의 값 반환

## .length
- 배열의 길이를 출력해줌(item의 개수)

## .concat()
- 원본의 배열 데이터에 영향없이 새로운 배열 데이터가 합쳐짐.

## .forEach()
- 배열데이터의 item 개수만큼 callback이 실행됨.

## .map()
- 내부 callback 함수에서 return을 통해 반환된 데이터들이 새로운 배열로 만들어짐.

## .filter()
- 배열 데이터 안에 있는 item들을 특별한 기준으로 반환해줌.

## .find() / .findIndex()
- /^A/.test() -> A로 시작하는 단어 찾기 // A로 시작하는 단어 index 찾기

## .includes(AA)
- 배열데이터내에 AA 가 존재하는지 판단 존재:true / 존재 x : false

## .push()
- 배열 데이터 가장 뒷 부분에 데이터 삽입(원본 수정)

## unshfit()
- 배열 데이터 가장 앞 부분 데이터 삽입(원본 수정)

## .reverse()
- 배열 데이터들의 순서를 뒤집어서 출력

## .splice(2, 2, 99)
- 배열데이터의 index 2번부터 2개의 데이터를 삭제 후 99를 배열데이터에 삽입

# 객체(Object)

## .asign(A, B)
- A의 배열데이터에 B의 배열 데이터를 추가

## .keys()
- porperty 이름만 출력해냄
- 객체 데이터

# 데이터 불변성(Immutability)

# 원시 데이터
- String, Number, Boolean, undefined, null

# 참조형 데이터
- Object, Array, Function