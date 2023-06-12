# 원티드 프리온보딩 FE 사전 과제

👩‍🦰 지원자: `조원희`

## 목차

[실행 방법](#실행-방법)  
[배포 링크](#배포-링크)  
[사용 패키지](#사용-패키지)  
[이슈](#이슈)

## 실행 방법

```bash
git clone . https://github.com/blueprint-12/wanted-pre-onboarding-frontend.git
yarn && yarn start #(혹은 npm install && npm run start)
```

## 배포 링크

[TODO_LIST 바로가기](https://wanted-pre-onboarding-frontend-grgb.vercel.app/)

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
  
    craco를 통해서 alias 절대 경로를 사용하는데 폴더명을 `types`로 했더니 `@types` 의 형태로 되었다. 이렇게 되면, 기존에 있던 types파일(TS를 지원하는 패키지들 등..)과 혼선이 생길 수 있으니 에러가 발생하는 거 같다. 결국 types에서 typings로 폴더명을 바꾸었더니 원하는대로 내가 직접 만든 타입을 컴포넌트에 import해올 수 있었다.
</details>

<details>
  <summary><u>craco를 사용하면 웹팩의 HMR 기능 사용불가</u></summary>

    찾아보면 이 기능이 지원되면서 CRA의 webpack 세팅을 수정할 방법도 있겠지만..
    기본적으로 핫모듈리플레이스 기능이 craco CLI를 사용하면 동작하지 않는다.
    => 그렇기 때문에 코드를 수정하고 매번 새로고침을 해줘야 한다.(매우 불편)

</details>

<details>
  <summary><u>Vercel로 CRA 배포 시, react-router의 navigate hook 동작 에러</u></summary>

    결론적으로 말하면 Component를 페이지 단위로 React.lazy()를 통해 스플리팅해서 가져왔던 것이 문제였다.
    SPA 특성상 한번에 필요한 모든 리소스를 다운받아오는데 이때, createBrowserRouter에 지정된 컴포넌트들이 포함돼야 한다.

    lazy로 로드된 컴포넌트 페이지는 첫로드 시, 다운 받아오지않기 `소스 탭`을 확인하니 빈 페이지가 나타났다.
    사실 소스 탭에서 해당 경로로 react-router-dom의 Link 태그를 통해 이동하면 바로 확인할 수 없고 새로고침하면서 재요청을 해야 확인할 수 있었다.(아직도 이유를 정확히 모르겠다.)

    SPA는 초기 로드 시 클라이언트 측 JavaScript 코드가 실행되고, 이 코드는 클라이언트 라우팅을 처리하고 URL의 변화에 따라 적절한 페이지를 동적으로 렌더링한다. 즉, 처음 가져온 JS파일에 url에 따른 렌더링 페이지가 제대로 mapping되어 있어야 하는데 lazy load를 통해서 그 작업이 제대로 되지 않았을 수도 있다는 거 같다.

    실제 이슈는 Vercel 배포와는 큰 상관이 없으며, webpack config 혹은 vercel.json으로 수정해야할 path문제도 아니었다. 단지 내가 craco로 Alias 세팅을 하고 타입스크립트로 배포를 처음해보기 때문에 Vercel에서는 TS를 지원하지 않아서 애초에 빌드 파일을 올려야하는 건가 했다. 하지만, 그렇다고 하기엔 build까지 직접 수행해주고 yarn build 명령어를 사용하기 때문에 build 시, TS => JS로 변환하여 하나의 청크 파일로 만드는 것을 안다.

    애초에 어플리케이션의 index부터 화면에 아무것도 안 나타나는 것이 아니라 url이 새로고침없이 동적으로 변할 때에만 매핑된 페이지를 전환시켜주지 못하는 상황이었기 때문이다. (즉, TS로 만들어졌어도 vercel에서 빌드를 하기 때문에 브라우저가 현재 언어(JS, html, css)를 이해하고 화면에 잘 출력하고 있다.)

    해결해보려고 별 걸 다 확인해본 거 같다. vercel의 문제일까봐 `넷틀리파이`에서도 정적 사이스틀 호스팅해봤는데 여기서 배포시 CI설정에서 warning을 error로 설정해놔서 무수한 배포실패를 겪었다(덕분에 냅뒀던 warning들을 다 없앴다..)

</details>
