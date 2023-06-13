# 원티드 프리온보딩 FE 사전 과제

👩‍🦰 지원자: `조원희`  

🚩 배포 링크: [TODO_LIST 바로가기](https://wanted-pre-onboarding-frontend-grgb.vercel.app/)

## 목차

1. [실행 방법](#실행-방법)  
2. [사용 패키지](#사용-패키지)  
3. [이슈](#이슈)

## 실행 방법

```bash
git clone . https://github.com/blueprint-12/wanted-pre-onboarding-frontend.git
yarn && yarn start #(혹은 npm install && npm run start)
```

## 사용 패키지

- axios (http)
- react-router-dom v6 (라우팅)
- pretendard (폰트)
- craco & react-app-alias (webpack + ts에서 alias 설정을 위한 패키지)
- emotion (CSS-in-js)

```bash
yarn add -D @craco/craco react-app-alias
```

```bash
yarn add @emotion/react @emotion/styled
```

## 이슈

<details>
  <summary><u>craco 절대 경로 접두사 @와 폴더명이 `types`일 때 importing 에러</u></summary>
  
    craco를 통해서 alias 절대 경로를 사용하는데 폴더명을 
    `types`로 했더니 `@types` 의 형태로 되었다. 
    이렇게 되면, 기존에 있던 types파일(TS를 지원하는 패키지들 등..)과 
    혼선이 생길 수 있으니 에러가 발생하는 거 같다.
    결국 types에서 typings로 폴더명을 바꾸었더니 원하는대로 
    내가 직접 만든 타입을 컴포넌트에 import해올 수 있었다.
</details>

<details>
  <summary><u>craco를 사용하면 웹팩의 HMR 기능 사용불가</u></summary>

    찾아보면 이 기능이 지원되면서 CRA의 webpack 세팅을 수정할 방법도 있겠지만..
    기본적으로 핫모듈리플레이스 기능이 craco CLI를 사용하면 동작하지 않는다.
    => 그렇기 때문에 코드를 수정하고 매번 새로고침을 해줘야 한다.(매우 불편)

</details>

<details>
  <summary><u>배포 시, react-router의 navigate hook 동작 에러</u></summary>
  
  `내용이 길어 블로그 포스팅으로 따로 분리해놨습니다.`  
  [lazy로드된 컴포넌트 배포 시 react router 동작 오류](https://blueprint-12.tistory.com/396)
  
</details>
