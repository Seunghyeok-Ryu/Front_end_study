new Swiper('.section .swiper-container', {
  slidesPerView: 1 , // 한 번에 보여줄 슬라이드 개수
  spaceBetween : 10,  // 슬라이드 사이 여백
  loop : true,
  autoplay : {
    delay : 5000
  },
  pagination : {
    el : '.section .swiper-pagination',  // 페이지 번호 요소 선택자
    clickable : true,
  },
  navigation: {  // 슬라이드 이전/ 다음버튼 사용 여부
    prevEl : '.section .swiper-prev',   // 이전 버튼 선택자
    nextEl : '.section .swiper-next'    // 다음 버튼 선택자
  }
});