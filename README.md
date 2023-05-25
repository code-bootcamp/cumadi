### Md.

* 프로덕트명 : 커마디
* 개발기간 : `2023년 5월 1일 ~ 진행중`
* 서비스 핵심 요약 : 마크다운으로 작성한 블로그 글들을 시리즈로 엮어서 판매하는 서비스

------

#### 📄 설치 및 실행 방법

```bash
// Node v16 or later
// npm install -g yarn
```

1. Cloning Source from Repository

```bash
$ git clone https://github.com/code-bootcamp/mcb2_team01_client.git
```

2. Initialize Workspace & Installing required packages

```bash
$ yarn install
```

3. Starting Server (ssr enabled)

```bash
$ yarn dev
```

4. (In case you want to build static resource and run) Build and Start Server

```bash
$ yarn build
$ yarn start
```


------

### 😂 팀원 소개

|  이름  |   역할   | 담당                                                       |                            GitHub                            |         이메일         |
| :----: | :------: | :--------------------------------------------------------- | :----------------------------------------------------------: | :--------------------: |
| 박예림 | 팀장, FE | 포스트 작성, <br />수정                                    | [![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/yerimpark103) | yerimpark103@gmail.com |
| 유승우 |    FE    | 포스트 조회, <br />포스트 질문답변 댓글, <br />포스트 통계 | [![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/berenickt) |  dhktjdyd12@naver.com  |
| 박소현 |    FE    | 시리즈 결제, <br />시리즈 장바구니                         | [![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ParkSohyunee) | sohyunee016@gmail.com  |
| 전필성 |    FE    | 로그인, <br />유저 정보 수정                               | [![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/jeonpilseong) |  abcabc3502@gmail.com  |
| 김세환 |    FE    | 시리즈 목록, <br />시리즈 리뷰                             | [![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/dragonfruitlemonade) |  tpghks9245@gmail.com  |

------

### 💡 기획의도 및 서비스 소개

![UserFlow-Miro](https://github.com/code-bootcamp/mcb2_team01_client/blob/main/public/readme/UserFlow-Miro.png)

- `기획의도`
  - 어떤 정보를 습득하고 배우기 위해 어떤 분야이든 관련 책을 읽는 것이 가장 빠르다고 생각했었습니다.
  - 과거부터 일반 블로그와 보고서 등을 썼을 떄, 글과 별개로 디자인이 가독성 좋지 않은 것이 불만이었습니다.
  - 그러다 발견한 것이 마크다운이었고, 마크다운으로 글을 쓰는데만 집중할 수 있어 좋았습니다.
  - 현재 많은 개발자들이 사용하는 블로그 플랫폼인 Velog가 있지만, 
    작성한 글들을 책처럼 엮어서 판매도 할 수 있으면 좋겠다는 생각이 들었습니다.
  - google books, 알라딘, YES 24 등의 해당 플랫폼에서만 전자책을 읽게 제한했고, 
    그 플랫폼들의 가독성들이 정말 불편하게 느껴졌고, 
    이런 점들이 몇몇 사람들이 ebook보다 종이책을 선호하게 되지 않았나 생각했습니다.
  - 그러다 ‘점프투파이썬’책을 만들어주신 위키독스를 운영하시는 박응용님의 플랫폼의 글들이 온라인 글임에도 오프라인 글과 다름없이 잘 읽히는 걸 알게되었고, 이 역시 마크다운으로 작성한 걸 알게되었습니다.
  - 따라서 독자가 더 나은 환경에서 글들을 읽을 수 있을 거 같아 이 서비스를 생각하게 되었습니다.
  - 여러가지 블로그 포스트를 보면서 중요하다 생각하는 문장이나 문단을 캡쳐하여 저장하고, 
    사람들과 논의할 수 있는 플랫폼이 있었으면 좋겠다는 생각이 들었습니다.
- `핵심 개선 포인트`
  - 마크다운 블로그 + ebook 책들을 내가 원하는 환경에서 읽기
  - 현재 메모 시장에서 Notion으로 인해 개발자가 아닌 직종의 사람들도 마크다운의 유용함을 알게되었다고 생각합니다.
    그렇지만 Notion의 경우 무료든, 유료든 양이 많아지면 속도가 너무 느리고, 따로 글들을 판매할 수는 없습니다.
    - 책들을 더 빠른 시간 내 엮어서 출시 가능
    - 문장/문단 단위 포스트 스크랩 + 커뮤니티 공유 기능
    - 기억하고 싶은 글에 하이라이팅을 하고 사람들과 공유하여 논의할 수 있습니다.
- `기대효과`
  - 저 자신이 수 년간 블로그 글들을 작성하면서, 
    이런 서비스가 있었으면 해서 생각한 것이라 블로그 글 쓰는 걸 좋아하는 사람들이 한번 써볼 것 같습니다.
  - 또 Notion이나 메모로 정리를 좋아하는 사람들이 이 서비스를 한 번 써볼 것 같습니다.

------

### ⚙️ 사용한 Front-end 기술

|         기술명         | 사용이유                                                     |
| :--------------------: | ------------------------------------------------------------ |
|         React          | 2005년 Ajax로 Google Maps 같은 서비스가 등장하면서 SPA(Single Page Application) 시대에 접어들었고 Angular, React, Vue의 CSR(Client Side Rendering) 시대에 오면서 클라이언트 측에서 모든 걸 해결하기 시작했습니다. <br />서버에서 index.html을 보내주게 되면, 어플리케이션에는 필요한 링크만 들어있습니다. 그래서 처음 접속하면 빈 화면만 보이고, 링크된 JavaScript를 서버로 부터 다운로드 받습니다. 여기서 React Native, Electron 같은 React 관련 프레임워크와 리액트 개발자 커뮤니티가 커지면서, 현재 시장에서 높은 점유율을 가지고 있는 React를 선택했습니다. |
|        Next.js         | React 뿐만 아니라 Vue, Angular 같은 CSR 패러다임의 문제점은 크게 2가지인데, 첫 번째 사용자가 첫 화면을 보는데 시간이 오래 걸린다는 점, 두 번째 좋지 않은 SEO(Search Engin Optimization)입니다. 구글, 네이버 같은 검색엔진들은 서버에 등록된 웹사이트를 돌아다니며 HTML을 분석하는데, CSR에서 작동하는 HTML body는 대부분 텅텅 비어있기 떄문에, 검색엔진들이 CSR로 작성된 웹페이지를 분석하는데, 많은 어려움을 겪습니다. <br />이런 2가지 문제점을 해결하기 위해 재등장한 것이 SSR(Server Side Rendering)입니다. SSR은 사실 CSR보다 더 오래된 기술로 Ajax가 나오기 전에 웹 페이지를 생성하는 기술이 SSR이었고, 과거에 사용한 기술들이 PHP, AJP, JSP 등 입니다. <br />사용자가 처음 웹 사이트에 접속하면, 서버에 필요한 데이터를 모두 가져와서 HTML 파일을 만들고, 만들어진 HTML 파일을 동적으로 제어하는 코드들과 함께 클라이언트로 보내, 첫 번째 페이지 로딩이 빨라진다는 장점과 HTML에 컨텐츠가 담겨있기 때문에 더 효율적인 SEO가 가능합니다. <br />거기다 TTV(Time To View), TTI(Time To Interact) 측면에서 최종적으로 JS파일을 받아와야지만, 사용자가 상호작용할 수 있는 인터렉션이 가능해져서, SSR은 사용자가 사이트를 보는 시간과 실제 인터렉션이 가능한 시간과의 공백시간이 있습니다.  <br />위 공백시간 문제점을 해결하기 위해 SSG(Static Site Generation)이 등장하는데, 정적으로 웹 사이트를 미리 생성해서 서버에 배포해놓는 개념입니다. Gatsby+React로도 이를 만들 수 있지만, Next.js에서도 SSG를 지원하면서, SSR+SSG를 잘 섞어서 유연하게 사용할 수 있어 선택했습니다. |
|        Emotion         | CSS-in-JS 라이브러리로, HTML, CSS로만 디자인을 하면, HTML 태그들이 다 div, span 등으로 디자인해서 해당 태그가 기능을 위한 태그인지 헷갈릴 수 있는데, Styled-Component나 Emotion같은 CSS-in-JS 라이브러리를 쓰게되면, 해당 태그가 어떤 의미인지 파악하는데 도움을 줄 수 있으며, CSS 관리가 편해지며, React 컴포넌트의 재사용성과 유지보수성을 높일 수 있어서 선택했습니다. |
| GraphQL & ApolloClient | REST-API의 POST 메소드를 응용해 만든 데이터 통신 기술로 모든 데이터를 받아오는 REST API와 달리, 필요한 데이터만 불러오는 식으로 동작해, 불필요한 데이터 전송을 막을 수 있습니다. |
|       TypeScript       | JavaScript는 따로 타입을 지정하지 않아도 알아서 인식하고, 호이스팅 등의 기능을 통해 선언과 초기화의 위치가 바뀌어도 문제없이 동작합니다. 이는 브레이브와 파이어폭스, JavaScript 창시자인 브랜든 아이크가 자기가 만든 언어가 이렇게 널리 쓰일줄 모른채 10일만에 개발했기 때문입니다. <br />이런 관대함은 디버깅을 어렵게하는 단점이 존재합니다. 그래서 MS사에서 다른 언어처럼 타임의 엄격함을 쓰기 위해 JavaScript 확장판격인 TypeScript를 쓰는 것이 유지보수 관점에서 더 좋기 때문에 선택했습니다. |

* 기타 주요 라이브러리
  * Recoil : 전역 상태 관리
  * [TOAST UI](https://ui.toast.com/)
  * [React-Markdown](https://github.com/remarkjs/react-markdown)
  * [I’mPort (portone)](https://portone.io/korea/ko?utm_source=google&utm_medium=google_sa&utm_campaign=pf_conversion_2302_kr&utm_content=homepage&gclid=Cj0KCQjw0tKiBhC6ARIsAAOXutlMBCAYcUxS81oGxjWOzfpZIzER3O0xBCwwKMcaLqD334rNd6s5NacaArhAEALw_wcB)
  * [Chart.js](https://www.chartjs.org/)
  

------

### ⚙️ User Flow

![UserFlow](https://github.com/code-bootcamp/mcb2_team01_client/blob/main/public/readme/UserFlow.png)

------

### ⚙️ ER 다이어그램

![mcb_ERD](https://github.com/code-bootcamp/mcb2_team01_client/blob/main/public/readme/mcb_ERD.png)

------

### 🔮 기능 시연자료

#### 회원 - 회원가입, 로그인

* 회원가입
  * 이메일로 회원가입을 할 수 있으며, 등록한 이메일로 로그인이 가능합니다.

------

#### 마이페이지 - 비밀번호 수정, 

* 로그인을 한 뒤에는 마이페이지 > 프로필 수정하기에서 
* 유저의 프로필 사진과 자기소개를 등록할 수 있으며,
* 비밀번호를 수정할 수 있습니다.

------

#### 포스트 - 생성, 조회, 수정, 삭제

* 포스트 조회
  * 저희 사이트는 마크다운 형식으로 작성된 글들을 조회할 수 있으며,
  * 좋아요를 누를 수 있고,
  * 다시 보고 싶은 글들을 드래그하여 저장할 수 있습니다.
  * 저장된 글을 마이페이지 > 하이라이트모음에서 확인 가능합니다.

------

#### 포스트 댓글, 답변 - 생성, 조회, 수정, 삭제

* 포스트를 조회하며 다른 유저들이 댓글을 달면, 작성자가 답변을 달아 서로 소통할 수 있습니다.

------

#### 포스트 통계

* 작성자는 자기가 작성한 포스트의 조회 수를 확인할 수 있습니다.

------

#### 작성포스트, 작성시리즈

* 작성자는 자기가 등록한 포스트들, 작성한 시리즈를 마이페이지에서 조회할 수 있습니다.

------

#### 시리즈 - 생성, 조회, 수정, 삭제

* 작성자는 포스트들을 시리즈로 묶어서 판매가 가능합니다.

------

#### 시리즈 장바구니, 결제
* 다른 유저들은 만들어진 시리즈를 장바구니에 담을 수 있습니다.
* 장바구니 아이콘을 클릭하여 유료 / 무료 시리즈를 구매할 수 있습니다.
* 구매한 내역은 마이페이지 > 내가 구매한 시리즈에서 확인 가능합니다.
