플렉스 (정렬) Container (2)

flex-wrap : Flex Items 묶음(줄 바꿈) 여부
  nowrap : 묶음(줄 바꿈) 없음 (기본 값)
  wrap : 여러 줄로 묶음
  wrap-reverse : wrap의 반대 방향으로 묶음

justify-content : 주 축의 정렬 방법
  flex-start : Flex Items를 시작점으로 정렬(기본 값)
  flex-end : Flex Items를 끝점으로 정렬
  center : Flex Items를 가운데 정렬
  space-between : 각 Flex Item 사이를 균등하게 정렬
  space-around : 각 Flex Item의 외부 여백을 균등하게 
  
  align-content: 교차 축의 여러 줄 정렬 방법 (한줄이 아닌 두줄 이상 and 정렬이 가능한 여백이 존재해야 사용 가능)
    stretch : Flex Items를 시작점으로 정렬
    flex-start : Flex Items를 시작점으로 정렬
    flex-end : Flex Items를 끝점으로 정렬
    center : Flex Items를 가운데 정렬

  align-items : 교차 축의 한 줄 정렬 방법(한줄을 정렬)
    stretch : Flex Items를 교차 축으로 늘림
    flex-start : Flex Items를 시작점으로 정렬
    flex-end : Flex Items를 끝점으로 정렬
    center : Flex Items를 가운데 정렬
    baseline : Flex Items를 각 줄의 문자 기준선에 정렬
