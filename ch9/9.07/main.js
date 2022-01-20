/*
let boxEl = document.querySelector('.box');

console.log(boxEl);

boxEl.addEventListener('click', function(){
  console.log('Click!!');
  boxEl.classList.add('active');
  console.log(
    boxEl.classList.contains('active')
    );
  boxEl.classList.remove('active');
  console.log(
    boxEl.classList.contains('active')
  );
    
});*/



/*
//HTML 요소(Element) 모두 검색/찾기
const boxEls = document.querySelectorAll('.box');
console.log(boxEls);

// 찾은 요소들 반복해서 함수 실행!
// 익명 함수를 인수로 추가!
boxEls.forEach(function () {});

// 첫 번째 매개변수(boxeEl) : 반복 중인 요소.
// 두 번째 매개변수(index) : 반복 중인 번호
boxEls.forEach(function(boxEl,index) {});

// 출력!
boxEls.forEach(function(boxEl, index){
  boxEl.classList.add(`order-${index +1})`);
  console.log(index.boxEl)
}*/

/*
const boxEls = document.querySelectorAll('.box');

boxEls.forEach(function (boxEl, index){
  boxEl.classList.add(`order-${index+1}`)
  console.log(index, boxEl);
});*/


const boxEl = document.querySelector('.box');

console.log(boxEl.textContent);

boxEl.textContent = 'HEROPY!!';
console.log(boxEl.textContent);