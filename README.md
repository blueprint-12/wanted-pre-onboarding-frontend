# 원티드 FE 프리온보딩 사전과제

👩‍🦰 지원자: `조원희`

🚩 배포 링크: [TODO_LIST 바로가기](https://wanted-pre-onboarding-frontend-grgb.vercel.app/)

🛠 사용 스택: `TypeScript`, `Emotion`, `Axios`, `CRA`, `React v18`, `react-router-dom v6`

<br/>

- [원티드 FE 프리온보딩 사전과제](#원티드-fe-프리온보딩-사전과제)
  - [실행 방법](#실행-방법)
  - [사용 패키지](#사용-패키지)
  - [이슈](#이슈)
  - [폴더 구조 상세 설명](#폴더-구조-상세-설명)

## 실행 방법

```bash
git clone . https://github.com/blueprint-12/wanted-pre-onboarding-frontend.git
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

## 폴더 구조 상세 설명

```
wanted-pre-onboarding-frontend
├─ .gitignore
├─ API.md #API 관련 docs
├─ craco.config.js # 절대경로 설정 craco 세팅 파일
├─ package.json
├─ public
├─ README.md # 프로젝트 설명 docs
├─ src
│  ├─ App.css
│  ├─ App.test.tsx
│  ├─ App.tsx #별다른 기능X, index.tsx에 있는 router 컴포넌트들의 공통 레이아웃 컴포넌트
│  ├─ components # 페이지를 구성하는 컴포넌트를 모아놓은 폴더
│  │  ├─ AddTodo # 투두 추가 기능 + form UI
│  │  │  └─ index.tsx
│  │  ├─ Header # Home 페이지에 들어가는 Header 컴포넌트
│  │  │  ├─ index.tsx
│  │  │  └─ styles.tsx
│  │  ├─ Todo # 투두 삭제, 수정 기능 + 개별 투두 UI
│  │  │  ├─ index.tsx
│  │  │  └─ styles.tsx
│  │  └─ TodoList # 투두 리스트 불러오기 기능 + 투두리스트 UI
│  │     ├─ index.tsx
│  │     └─ styles.tsx
│  ├─ contexts #전역으로 공유되는 값들을 담은 context폴더
│  │  ├─ auth
│  │  │  └─ AuthContext.tsx # 권한 context => auth 상태값과 setAuth함수
│  │  └─ todo
│  │     ├─ TodoContext.tsx # 투두 관련 2개의 컨텍스트(todo리스트 컨텍스트와 todo리스트 상태를 업데이트하는 액션을 수행하는 dispatch 컨텍스트)
│  │     └─ todoReducer.ts # todo 리스트값과 todo리스트의 상태를 변경하는 액션을 관리하기 위한 리듀서
│  ├─ hooks # 커스텀 훅을 모아놓은 폴더
│  │  ├─ useAuth.ts
│  │  ├─ useDispatch.ts # context에서 제공된 todo리스트의 state를 변경하는 dispatch 함수를 반환하는 hook
│  │  ├─ useInput.ts # input의 state와 state를 변경하는 함수, target 핸들러를 반환하는 hook
│  │  ├─ useRouter.ts # 현재 경로와 라우팅함수를 담은 객체를 반환하는 hook
│  │  └─ useTodoState.ts #공유된 context의 todo리스트 state를 반환하는 hook
│  ├─ index.css #reset css일부와 글로벌 font
│  ├─ index.tsx
│  ├─ layouts
│  ├─ logo.svg
│  ├─ pages
│  │  ├─ Content # todoList를 보여주는 컨텐츠 페이지
│  │  │  └─ index.tsx
│  │  ├─ Home # 맨 처음 보이는 홈 페이지
│  │  │  └─ index.tsx
│  │  ├─ NotFound # 없는 경로에 접근했을 때 보이는 페이지
│  │  │  └─ index.tsx
│  │  ├─ SignIn # 로그인 페이지
│  │  │  ├─ index.tsx #로그인 기능,및 로그인 정보 유효성 검사
│  │  │  └─ styles.tsx
│  │  └─ SignUp # 회원가입 페이지
│  │     └─ index.tsx #회원가입 기능 및 회원가입 정보 유효성 검사
│  ├─ react-app-env.d.ts
│  ├─ reportWebVitals.ts
│  ├─ router.tsx # 경로별 컴포넌트가 정의되어 있는 라우터 파일
│  ├─ setupTests.ts
│  ├─ typings # 여러 컴포넌트에서 공유되는 타입들이 정의된 폴더
│  │  ├─ todo.ts
│  │  └─ user.ts
│  └─ utils #독립적인 기능을 모아놓은 폴더
│     ├─ api
│     │  └─ customAxios.ts # 전역에 사용될 커스텀 axios를 정의해놓은 파일
│     │  └─ getToken.ts # Axios 인스턴스 내에서 호출될 로컬스토리지 토큰을 리턴하는 함수
│     └─ validation # 유효성 검사 관련 기능을 모아놓은 폴더
│        └─ userInfoRegex.ts # 로그인, 회원가입에 사용되는 유저정보 유효성 검사 정규표현식
├─ tsconfig.json
├─ tsconfig.paths.json # 절대경로 설정 관련 파일
└─ yarn.lock
```
