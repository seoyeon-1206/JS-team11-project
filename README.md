# 🎞프로젝트 "Show Me Your Movie"

### < 목차 >

**# 프로젝트 팀 "빼빼로와 아이들"소개**

- 팀원소개

**# 프로젝트 소개**

- 개발 기간 & 프로젝트 명 & 소개 & 목표 & 프로젝트 Rule

**# 시작가이드**

- Installation

**# 와이어프레임**

- 프로젝트 화면 구성 및 기능

  - 필수 사항(Creat, Read 포함)

  - 선택 사항(Update, Delete 포함)

  - 기능담당

  - 기능소개

**# 트러블슈팅**



<br />

## 프로젝트 팀 "빼빼로와 아이들" 소개

<br />

**팀원 소개**

---

|                            신서연                            |                            박영욱                            |                            김경연                            |                            남해리                            |
| :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
|                             INTJ                             |                             INFP                             |                             ISTJ                             |                          Enfj, Infp                          |
| <p><img src="https://avatars.githubusercontent.com/u/128902050?v=4" width="380px" height="150px"/></p> | <p><img src="https://lh7-us.googleusercontent.com/q3yG6gFM6-2EBi2y9ulcCVUc8GQEdrZKvGNoQXbmTPumxwauypaEH02dEqljjQiE7uc0wte4guBNSWfLWnATLCaIX4qUugAdSmw0gIW2WVyTm0FbvaFmraCCs5wB-LWkd9NgNUFDnxtcv_8TaE-bzfU" width="340px" height="150px"/></p> | <p><img src="https://avatars.githubusercontent.com/u/105699149?v=4" width="300px" height="150px"/></p> | <p><img src="https://lh7-us.googleusercontent.com/Ysape_5NRn4N32ZU7oOgrQmrfIAjTdQXKka5lOI6M6JxrEWg48DNhLQEXET56SbLP6f4CEJsn5RpDDoHgM9m6eDLyUolLBdP_xbLnp0gftdJg0hYUrKGwSXXVQxNO02AiSTl_4Wp0nHn9CSfQBblXhM" width="360px" height="150px"/></p> |
|       [@seoyeon-1206](https://github.com/seoyeon-1206)       |         [@ugyobppang](https://github.com/ugyobppang)         |      [@KyeongyeonKim](https://github.com/KyeongyeonKim)      |          [@r03181231](https://github.com/r03181231)          |
|                             팀장                             |                             팀원                             |                             팀원                             |                             팀원                             |
|                           FrontEnd                           |                           FrontEnd                           |                           FrontEnd                           |                           FrontEnd                           |

<br />



**팀 목표** 

---

\- 포기하지 말자 ! 

\- 완성하자 !

<br />

## 프로젝트 "Show Me Your Movie(SMYM)"



**프로젝트 명** : Show Me Your Movie(SMYM)

**개발 기간** : 2024.01. 10~ 2023.01.15 (6일)

**프로젝트 소개** : 평점 좋은 영화들에 대해 상세한 정보를 제공하는 서비스입니다.

**프로젝트 목표** : 사용자가 원하는 영화의 상세 정보를 제공합니다.

<br />

### 🚦 Project Rules

#### **개발 환경**

- **environment :** Visual Studio Code, git, github
- **development :** HTML5, CSS3, Javascript
- **OpenAPI** : TMDB
  - https://developer.themoviedb.org/reference/movie-top-rated-list (영화리스트)
  - https://developer.themoviedb.org/reference/movie-details (영화 상세 내용)
- **communication** : figma, slack, notion, zep



<br />



#### Code Convention

- 변수 : 카멜케이스

- 클래스명 : 대쉬(-)

- div id로 기능 구별 (ex. div id=”header” , div id=”search”)

- branch 이름 : **타입_기능/#이슈번호  Feat_search/#1**

- issue 이름 : **[타입] - 설명 [Feat] - search 기능 구현**

  

**개인 작업하기**

- 기능 개발을 위해 작성한 이슈 번호를 사용하여 branch를 생성합니다. (ex. (git branch 사용법 참고))

- 작업 전에 develop branch를 반드시 pull하고 시작합니다. (git pull origin develop)

- commit은 컨벤션을 지켜 메세지를 적습니다.

- push은 해당 작업 branch에 합니다.

- pull request도 컨벤션을 지켜 생성합니다.

- 팀원들의 코드리뷰를 받았으면 merge 합니다.

- 꼭! 브랜치를 헷갈리지 않도록 합시다. 이슈번호 확인!

  

**Pull Request 하기**

- 본인이 작업하던 branch를 deve branch로 merge 합니다.
- 절대 main으로 하지 않습니다!!
- base는 develop , compare는 본인 작업 브랜치 입니다!!
- PR제목은 **[타입] - 설명**으로 통일합니다.
- Reviewers에는 상대방을 태그합니다.
- Assignees에는 본인을 태그합니다.
- Labels에는 해당 작업과 맞는 유형을 태그합니다.
- 설명란에는 어떤 작업을 할 예정인지, 관련된 이슈번호가 있는지 참고한 내용이 있는지 등 필요한 내용을 적습니다.

**PR 후 Merge 하기**

- pull request를 생성하면 슬랙에 리뷰를 요청합니다.
- 팀원들은 내용을 확인하고 코드리뷰 comment를 자유롭게 작성합니다.
- 모두의 comment를 받았으면 본인이 merge합니다.



<br />



#### Commit Convention

**commit type**

- Feat : 기능 구현
- Chore: 기능 변경 없는 코드 변경 사항
- Del : 코드 삭제
- Fix : 버그 수정
- zDocs : 문서 수정
- Style : UI 추가 및 수정
- Refactor: 코드 리팩토링
- Test : 테스트 코드, 리팩토링 코드 추가
- Setting: 프로젝트 세팅



**commit message**

- 모든 커밋 메세지 뒤에는 이슈번호를 태깅합니다.
- 커밋 메세지 영어로
- 모든 커밋 메세지는 { **[타입/#이슈번호] 메세지** } 로 작성합니다.
- ex) [Feat/#1] add splash screen



<br />

<br />


## 시작 가이드



### Installation

```bash
$ git clone https://github.com/seoyeon-1206/JS-team11-project.git
$ cd JS-team11-project
```

<br />

## 와이어 프레임

<br />

- 컬러 가이드와 메인 페이지                                            

<p><img src="https://lh7-us.googleusercontent.com/9aDCqIpj3gSEKpM5f2094LujOzBo1OPFH59xmTGBqxKNjiPGz0axma63rPKL9FecGShkfBNylWQXLJNXZekqrFv82q_mAN2aawzJGuGMa0y_lrgKvraHxQdPh8EX8TSvezu8DOuI5s-67uqsDtVxOAE" align="center" width="40%" height="40%" ></p>



- 상세페이지와 상세페이지 구성

<p><img src="https://lh7-us.googleusercontent.com/nQUQ1s624QhiNR2r0Sg0U1ERqGJC9k1cdzku66vutLY9ZT539V0ZgJd0MvLCbS7cmquosgiG9L_Xh2uxrqmAXrxy2E6f5S3jg0-BZmsIvE990Nl-l5Jl9xfgKKVqmSQApCEsc_GOkLQEBXzHP0mh51I" alignㅊㄷer" width="50%" height="50%"><p>

<br />
<br />
<br />


## 프로젝트 화면 구성 및 기능

<br />

### 1. 필수 요구 사항 (Create 구현, Read 구현)

- [x]  TMDB 또는 영화진흥위원회 오픈 API 이용(택 1 또는 중복 사용) - 영화 정보들을 제공해 줍니다.

- [x] 영화정보 상세 페이지 구현

  - [x] 기존 영화정보 카드 리스트에서 특정 item을 선택할 시, 상세 페이지로 이동하도록 구현합니다.

  - [x] 상세 페이지에서 메인 페이지(홈)로 이동하는 UI도 함께 구성합니다.

- [x] 상세 페이지 영화 리뷰 작성 기능 구현 

  - [x] 상세페이지에서 특정 영화에 대해 의견을 작성할 수 있는 UI를 구현합니다.

  - [x] 작성자, 리뷰, 확인비밀번호를 입력하도록 구현합니다.

  - [x] 작성한 정보는 브라우저의 localStorage에 적재하도록 합니다.

- [x] github PR(=Pull Request) 사용한 협업

  - <p><img src="https://lh7-us.googleusercontent.com/26WltEvKJjCQ_Gh_TaEXxZtu7pzmVUM-bVjQXFj_4gkD5LD_trBzcs2qxw0IjbTo8QtxDUGxpQxyv0mTNmsTO9_knwmGP5rBwQw7ek4wtO52waRbiN4DbWfElXQuXxrRSKXEdwkpUNf7CA2Rxpe_CIs"></p>

- [x] UX를 고려한 validation check 

  - [x] 영화 검색 시

  - [x] 댓글 작성 시

  - 추가 기능 구현 시 반드시 삽입

- [x] 하기 기재된 Javascript 문법 요소를 이용하여 구현

  

  <br />

### 2. 선택 요구 사항 (Update 미구현, Delete 구현)    

- [x] CSS
  - [x] flex 사용하기
  - [x] grid 사용하기
  - [x] 반응형 UI 구성하기

- [ ] 상세페이지 리뷰 수정 및
- [x] 상세페이지 삭제 기능 구현
- [ ] 메인 페이지
  - [ ] 조건에 맞는 카드 리스트 정렬 기능(이름순, 별점순 등 자유롭게)
- [ ] 위에서 설명하지 않은 기타 외부 API
- 원하는 추가기능 무엇이라도 okay!
  - 여러분의 챌린지는 언제나 환영합니다. 필수 요구사항이 완료되었다면, 자유롭게 추가기능을 넣어주세요.
  - 단, 우선순위는 필수요구사항임을 명심해주세요!

<br />
<br />
<br />

<br />

### 기능 담당

| 기능                                                         | 담당자 |
| ------------------------------------------------------------ | ------ |
| 메인화면에서 상세 페이지로 연결 링크, 상세 페이지 ''메인 화면'' 홈 버튼 | 김경연 |
| 영화 상세 정보 구성하는 템플릿, 영화의 상세 정보 API 연결, 상세 페이지 CSS | 신서연 |
| 리뷰 등록                                                    | 박영욱 |
| 리뷰 조회, 리뷰 삭제                                         | 남해리 |




<br />

### 기능 소개

- **영화 제목 검색어 유효성 검사**

  - 검색어를 입력하지 않으면 alert창을 띄워줍니다.

    

- **상세페이지로 연결**

  - 메인페이지에서 영화 카드 하나 클릭 시, 상세페이지(detail.html?id=)로 연결해줍니다.

  - 영화 id값을 포함해서 해당 영화의 상세정보를 볼 수 있습니다.

    

- **‘메인 화면’ 이동 버튼**

  - index.html의 “Show Me Your Movie”부분과 detail.htlm의 “메인화면”을 클릭 시, 메인화면으로 이동합니다.

  

- **영화의 상세 정보 API 연결 **

  - TMDB api를 이용하여 영화의 이미지, 제목, 개봉 날짜, 런타임, 장르, 평점, 줄거리를 가져와 상세페이지에서 보여주었습니다.

- **영화 상세 정보 구성하는 템플릿**

  - document.querySelector(selector) 로 CSS 선택자를 이용하여 요소를 선택해 상세페이지에 나타냈습니다.

- **상세페이지 css**

  - document.querySelector(selector) 로 CSS 선택자를 이용하여 요소를 선택해 상세페이지에 나타냈습니다.

- **리뷰 등록**

  - 등록 버튼 클릭 시 유효성 검사를 진행 후 각 입력값에 대한 내용을 영화 아이디, 랜덤값의 작성자 아이디와 함께 객체로 만든 후 배열로 묶어 로컬스토리지에 저장하게 했습니다.
  - 리뷰 등록 유효성 검사
    - 감상평: 100자 이내로 작성될 수 있도록 구현, 그렇지 않으면 알림창을 띄우고 입력한 내용의 마지막 부분 제거
    - 이름: 8자 이하의 한글 또는 영어만 입력할 수 있도록 구현, 공백, 숫자, 특수문자가 입력되거나 8자가 넘어가면 알림창을 띄우고 입력한 내용의 마지막 부분 제거
    - 비밀번호: 4자리로 작성할 수 있도록 구현, 4자리 미만으로 입력 후 등록 버튼을 클릭하면 알림창 띄우고 입력값 모두 제거

- **리뷰 조회**

  - 리뷰를 작성하고나면 등록 아래에 쓴 댓글이 바로바로 보이게 했습니다. (localStoraget.getItem()메서드로 데이터를 가져옴)
  -  아래에서부터 최신 글이 차곡차곡 쌓이게 했습니다. (조회 템플릿을 만들 때 insertAdjacentElement메서드의 afterbegin속성 사용)

- **리뷰 삭제**

  - 알맞은 비밀번호를 작성하고 삭제버튼을 클릭시, 삭제되도록 했습니다.

    (localStorage저장소의 있는 데이터의 id와 비밀번호를 대조해서 비밀번호가 같으면 삭제하고 삭제할 데이터와 다른 id들의 리뷰들을 조회할 수 있도록 했습니다.) 

  - 확인 비밀번호에 유효성 검사를 주었습니다.

- 리뷰 삭제 유효성 검사

  - 비밀번호 4자리 미만으로 작성하고 삭제 버튼을 클릭 시, 사용자에게 alert메서드로 “비밀번호는 4자리로 입력해주세유!”라는 “확인 메세지”를 보여줍니다.
  - 비밀번호 input이 공백이거나 값이 없는 채로 삭제 버튼을 클릭 시, 사용자에게 alert메서드로 “비밀번호를 적어주세유!”라는 “확인 메세지”를 보여줍니다.
  - 작성한 글의 비밀번호와 맞지 않는 비밀번호를 적고 삭제 버튼을 클릭 시, 사용자에게 alert메서드로 “비밀번호가 틀려버렸어유! ~” 등의 “확인 메세지”를 보여줍니다.
  - 작성한 글과 맞는 비밀번호를 적고 삭제 버튼을 클릭 시, confirm메서드를 통해 사용자가 정말 댓글을 삭제할 지 선택지를 주어 편의를 주도록 했습니다.
    - 취소를 클릭 시, alert메서드로 “댓글 삭제를 취소하셨다”는 알림을 주고 삭제가 취소됩니다. 
    - 확인을 클릭 시, alert메서드로 “댓글이 삭제되었다는”알림을 주고 댓글이 삭제됩니다.
   
<br />
<br />
