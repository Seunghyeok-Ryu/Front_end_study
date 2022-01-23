// Sub-menu
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function (){
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function (){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function (){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

// Scroll 
// _.throttle(함수, 시간(ms))
// opacity : 화면 보임 안보임, display : 실제 블럭 존재 유무
const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if(window.scrollY > 500){
    // badge 숨기기
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity : 0,
      display : 'none'
    });
  } else{
    // badge 보이기
    gsap.to(badgeEl, .6, {
      opacity : 1,
      display : 'block'
    });
  }
}, 300));

// fade-in
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index+1) *.7, // 0.7, 1.4, 2.1, 2.7
    opacity : 1,
  });
});


// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container',{
  direction : 'vertical',
  autoplay : true,
  loop : true
});
