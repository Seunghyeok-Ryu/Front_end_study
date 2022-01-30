// 특정 데이터 상세 type 확인 방법
// export default 따른 js로 연결
export default function getType (data) {
  return Object.prototype.toString.call(data).slice(8, -1)
};