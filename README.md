# 원티드 FE 프리온보딩 사전과제

👩‍🦰 지원자: `조원희`

🚩 배포 링크: [TODO_LIST 바로가기](https://wanted-pre-onboarding-frontend-grgb.vercel.app/)

🛠 사용 스택: `TypeScript`, `Emotion`, `Axios`, `CRA`, `React v18`, `react-router-dom v6`

<br/>

- [원티드 FE 프리온보딩 사전과제](#원티드-fe-프리온보딩-사전과제)
  - [폴더 구조](#폴더-구조)
  - [실행 방법](#실행-방법)
  - [사용 패키지](#사용-패키지)
  - [이슈](#이슈)
  - [프로젝트 상세 설명](#프로젝트-상세-설명)
  - [업데이트](#업데이트)

## 폴더 구조

- <i>components</i> - 페이지를 구성하는 작은 단위의 컴포넌트를 모아놓은 폴더(기능 별 구분)
- <i>contexts</i> - 전역으로 공유되는 값들을 담은 context폴더 (투두리스트 컨텍스트, 권한 컨텍스트)
- <i>hooks</i> - 커스텀 훅을 모아놓은 폴더
- <i>pages</i> - 라우팅의 기준점이 되는 페이지 컴포넌트를 모아놓은 폴더
- <i>typings</i> - 공유 타입들 정의 폴더
- <i>utils</i> - 독립적인 기능을 모아놓은 폴더 (axios인스턴스, 유효성 검사 로직)

## 실행 방법

```bash
git clone https://github.com/blueprint-12/wanted-pre-onboarding-frontend.git . #현재 경로에 클론
yarn && yarn start #(혹은 npm install && npm start)
```

## 사용 패키지

- pretendard (폰트)
- craco & react-app-alias (CRA + ts에서 alias 설정을 위한 패키지)

```bash
# craco & react-app-alias
yarn add @craco/craco react-app-alias
```

```bash
# Emotion 설치
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
<br/>

## 프로젝트 상세 설명

[프로젝트 상세 설명 포스팅](https://blueprint-12.tistory.com/399)

## 업데이트

- [ ] prettier, ESLint, husky 적용
- [ ] 불필요한 state 제거하기
