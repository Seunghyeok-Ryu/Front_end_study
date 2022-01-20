// Q. hello 이름의 함수 표현을 작성하고 호출 하시오
const hello = function(){};
hello();

// 조건이 참(true) 인 조건문 작성
if(true){}

// <div class="box">Box!!</div> 위 요소의 내용(Content)을 콘솔 출력
const boxEl=document.querySelector('.box');
console.log(boxEl.textContent);

// const boxsEl = document.querySelectoor('.boxs');
// 위 코드의 boxEl 요소에 클릭(Click) 이벤트를 추가해, 클릭시'Hello~'를 콘솔 출력
const boxsEl=document.querySelector('.boxs');
boxsEl.addEventListener('click',function(){
  console.log('Hello~');
});

/*
  <div>1</div>
  <div>2</div>
  위 2개의 DIV 요소에 JS로 class="hello"를 추가하시오*/
const divEls = document.querySelectorAll('div')
divEls.forEach(function(divEl){
  divEl.classList.add('hello');
});

/* cons logoEl = document.querySelector('logo');
위 코드의 logoEl요소에 HTML 클래스 속성의 값으로 'active' 가 포함되어 있으면 '포함됨!'을 콘솔 출력 */
const logoEl = document.querySelector('.logo');
logoEl.classList.add('active');
if(logoEl.classList.contains('active')){
  console.log('포함됨!');
}else{
  console.log('포함되지않음!');
}



