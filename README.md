# HoRuReactJS
ReactJS 연습하기 위한 GIT

## 참고 웹사이트

* [ReactJS(번역문서)] (http://reactkr.github.io/react/docs/getting-started-ko-KR.html)
* [SlideShare(Taegon Kim님 자료)] (http://www.slideshare.net/taggon/react-js-46357445)

## ReactJS 란?
ReactJS : **A JAVASCRIPT LIBRARY FOR BUILDING USER INTERFACES**

-> 사용자 인터페이스를 만드는 자바스담당크립트 라이브러리

-> 컴포넌트를 통한 View 표현만 담당

## JSX? JavaScript XML

* JS코드에 xml를 직접 표현 -> JS로 컴파일(JSX Transformer)

## Why Virtual DOM

* DOM 단점 : 일관성없음, 브라우저테스트가 필요, 느림....(주륵) -> 일관성있고, 테스트가 쉽고, 빠르게 동작하도록 하는것이 Virtual DOM!!

* [React 성능 확인하기] (https://www.youtube.com/watch?v=z5e7kWSHWTg&feature=youtu.be&t=2m29s)

##단방향 데이터 흐름

* 상위컴포넌트 -> 하위 컴포넌트

* 하위컴포넌트의 변화는 이벤트를 통해 감지한다

* props = 상위컴포넌트에서 받은값(수정불가), state = 자기자신이 가지고 있는값(수정가능)
