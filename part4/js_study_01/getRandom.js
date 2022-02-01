export default function random () {
  return Math.floor(Math.random() * 10)
}
// floor : 정수 처리
// random 한 난수를 받고 * 10 -> 0~9사이의 소수점을 가진 숫자
// floor 를 통한 내림 처리 -> 정수형태로 바꿔줌