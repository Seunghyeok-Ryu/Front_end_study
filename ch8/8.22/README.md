변환(1)

transform : 변환함수1 변환함수2 변환함수3 ...;
transform : 원근법 이동 크기 회전 기울임 ;

2D 변환 함수
  단위 : px
    translate(x,y): 이동(x축,y축)
    translateX(x) : 이동(x축)
    translateX(y) : 이동(y축)
    scale(x,y) : 크기(x축,y축)
  단위 : deg
    rotate(degree) : 회전(각도)
    skewX(x) : 기울임(x축)
    skewY(y) : 기울임(y축)

3D 변환 함수
  단위 : px
    translate Z(z) : 이동(z축)
    perspective(n) : 원근법(거리) -> rotate 앞에 써야 적용됨.
  단위 : deg
    rotateX(x) : 회전(x축)
    rotateY(y) : 회전(y축)
    rotateZ(z) : 회전(z축)

  