# npm pakage관리 시작
```
$ npm init -y : 
```

# parcel-bundler -D package 설치
- 개발용 의존성 설치 ***(-D)***
```
$ npm install parcel-bundler -D
```


# lodash package 설치
- 일반 의존성 설치
- 실제 웹사이트에서 동작시키는 용도
```
$ npm install lodash
```


# npm install
```
$ npm install i
```
-> node_modules 폴더는 삭제 가능 위 명령어를 통해 언제나 복원 가능(***package.json/package-lock.json은 삭제되어서는 안됨***)

# 터미널로 라이브 서버 열기
package.json
```
"scripts": {
    "dev": "parcel index.html"
  }
```
터미널
```
$ npm run dev
```
- 웹브라우저 동작 용도(dist 폴더)
package.json`
```
  "scripts": {
    "build": "parcel build index.html"
  },
```
터미널
```
$ npm run build
```

