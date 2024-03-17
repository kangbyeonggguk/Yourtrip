# :ocean:Yourtrip

<img src=https://github.com/kangbyeonggguk/Yourtrip/assets/152140608/f15a8abd-461c-4743-b18e-1428d90653d9>

- 2023.08.30~2023.09.22
- URL : https://yourtrip.co.kr
- Test ID : test@test.com
- Test PW : 123456
  <br>
  <br>
  <br>
## 프로젝트 소개
- Yourtrip은 여행 기록 사이트로 여행 별로 카드를 생성하고, 일차 별로 정리해 공유할 수 있습니다.
- 여행지의 사진과 설명, 그리고 Googlemap을 통해 위치 정보를 공유할 수 있습니다.
- 관심 있는 여행지를 검색해 다른 사람들의 기록을 확인하며 여행 계획을 세우는 데 도움을 줍니다.
  <br>
  <br>
  <br>
## 기술 스택
  <div>
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">
  <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white">
  <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=node.js&logoColor=white">
  <img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white">
  <img src="https://img.shields.io/badge/mongodb-47A248?style=for-the-badge&logo=mongodb&logoColor=white">
  <img src="https://img.shields.io/badge/mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white">
  <img src="https://img.shields.io/badge/amazonec2-FF9900?style=for-the-badge&logo=amazonec2&logoColor=white">
  </div>
  <br>
  <br>

## 페이지 별 기능
### [홈 화면]
- 사이트 접속 시 초기 화면으로 네비게이션 바, 최신 여행 기록 카드 목록이 표시됩니다.
- 검색 기능을 통해 원하는 여행 기록만 확인할 수 있습니다.
- 로그인 되지 않은 상태에서도 여행 기록을 보는 것이 가능하고, 로그인 시에 여행 기록 추가/삭제/변경이 가능합니다.

![홈](https://github.com/kangbyeonggguk/Yourtrip/assets/152140608/5d67d70d-1926-4dee-91f1-fe2a878c360b)
<br>
### [회원가입]
- 회원가입에 필요한 정보를 입력하면 유효성 검사를 진행하고 맞지 않는 경우 입력창 하단에 경고문이 표시됩니다.
- 모든 유효성 검사가 통과된 경우 회원가입하기 버튼을 클릭해 회원가입을 진행하고, 로그인 페이지로 이동합니다.

![회원가입](https://github.com/kangbyeonggguk/Yourtrip/assets/152140608/2dde283b-4a44-4d0c-8f7e-fd049ff37e01)
<br>
### [로그인]
- 아이디와 비밀번호를 입력하면 유효성 검사를 진행하고 맞지 않는 경우 입력창 하단에 경고문이 표시됩니다.
- 모든 유효성 검사가 통과된 경우 로그인하기 버튼을 클릭해 로그인을 진행하고 홈 화면으로 이동합니다.
- 로그인이 완료되면 새로운 여행 기록 추가와 해당 계정의 기록에 수정,삭제가 가능해집니다.
  
![로그인](https://github.com/kangbyeonggguk/Yourtrip/assets/152140608/f7c49d9f-f774-4a32-a2a3-19c6260fa8c4)
<br>
### [로그아웃]
- 네비게이션 바의 로그아웃 버튼을 클릭해 로그아웃을 진행하고 로컬 스토리지의 토큰과 유저 정보를 삭제합니다.

![로그아웃 (2)](https://github.com/kangbyeonggguk/Yourtrip/assets/152140608/4ece9942-db59-46c5-9fae-37a32a7c11e8)
<br>
### [여행 기록 보기]
- 여행 기록 카드를 클릭하면 일차별로 정리된 여행 기록을 확인할 수 있고 해당 여행지의 정보와 위치를 볼 수 있습니다.
- 화살표를 클릭해 일차를 이동하며 정보를 볼 수 있습니다.

![메모 보기](https://github.com/kangbyeonggguk/Yourtrip/assets/152140608/2e8e4a14-aaa9-4b0e-bbdc-5a3587d13757)
<br>
### [여행 기록 추가]
- 제목을 입력하고, 대표 이미지를 선택한 뒤 추가하기 버튼을 클릭하면 새로운 여행 기록 카드가 생성됩니다.
- 상세 페이지에서 여행 기록 추가 버튼(흰색 플러스 버튼)을 클릭해 여행 기록을 추가 페이지로 이동합니다.
- 로그인 된 상태에서 해당 계정 여행 기록 카드에만 여행 기록 추가가 가능합니다
- 이미지와 위치, 내용을 입력한 뒤 추가하기 버튼을 눌러 여행 기록을 추가합니다.
- 일차 추가 버튼(파란색 플러스 버튼)을 클릭해 일차를 추가하고 해당 일차 페이지로 이동합니다.
- 상단의 일차 삭제 버튼을 클릭해 해당 일차를 삭제할 수 있으며 삭제 완료되면 이전 일차로 이동합니다.

![메모 보기](https://github.com/kangbyeonggguk/Yourtrip/assets/152140608/2e8e4a14-aaa9-4b0e-bbdc-5a3587d13757)
![일차 추가](https://github.com/kangbyeonggguk/Yourtrip/assets/152140608/9eb0dae6-d59d-493d-96be-9a710b37cc39)
<br>
### [여행 기록 수정, 삭제]
- 로그인 된 경우 해당 계정의 여행 기록 카드와 내부 여행 기록을 수정, 삭제가 가능합니다.
- 카드의 수정, 삭제 버튼을 클릭해 각각의 작업이 가능합니다.
- 여행 기록의 수정, 삭제 버튼을 클릭해 각각의 작업이 가능합니다.
- 수정 버튼을 클릭하면 수정 페이지로 이동합니다.
- 삭제 버튼을 누르면 확인 안내가 나오고 동의하면 삭제가 진행됩니다.

![여행 기록 수정](https://github.com/kangbyeonggguk/Yourtrip/assets/152140608/6542dbcd-b2b3-49ad-ba73-86731d7ea11a)
![여행 기록 삭제](https://github.com/kangbyeonggguk/Yourtrip/assets/152140608/6bb8d783-b5de-4c6b-9886-e8e00131e2b3)
<br>
### [내 기록]
- 로그인 된 경우 네비게이션 바의 내 기록 버튼을 클릭해 해당 계정의 여행 기록만 확인할 수 있는 페이지로 이동합니다.

![내 기록](https://github.com/kangbyeonggguk/Yourtrip/assets/152140608/d1c29106-4ae1-4527-a6d3-a96272bf46b3)
<br>
### [모바일]
- 모바일 환경에서도 불편함이 없도록 반응형 웹을 제작하여 브라우저 사이즈에 따른 UI 변경을 구현하였습니다.
- 모바일 환경에서는 네브게이션 바가 좌측으로 이동되며 메뉴 버튼을 클릭했을 때 나타납니다.

<img src=https://github.com/kangbyeonggguk/Yourtrip/assets/152140608/103f8679-b162-4493-a7a1-1f90434d2200 width=430 height=932>
<br>
<br>

## 후기
처음으로 피그마로 와이어 프레임을 그려보는 작업부터 프론트와 백엔드 구현까지 혼자 진행해보면서 웹 개발의 전체 과정에 대해 이해해 볼 수 있는 프로젝트였습니다.
반응형 구현부터 토큰과 전역 상태 관리, 어플리케이션 서버 구축과 NoSQL까지 처음 해보는 것이 많아서 어려웠지만 그 만큼 새롭고, 흥미롭게 몰입할 수 있었습니다. 
프로젝트를 기획할 때 CRUD를 모두 구현해보고, 사용해 보지 않은 것을 최대한 사용해보겠다라는 생각으로 기획했습니다.
개발 단계에서는 후회한 적도 있지만 그로 인해 성장하고 웹 개발의 전반적인 이해도를 높일 수 있었던 경험이었습니다.



