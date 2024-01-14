import reviewReadTemp from "./common/reviewReadTemp.js";
import { $section, blankPattern } from "./common/reviewReadValues.js";

const currMovieId = new URL(location.href).search.split("?")[1];
const reviewText = document.querySelector("#review-text");
const inputName = document.querySelector("#input-name");
const inputPw = document.querySelector("#input-pw");
const regBtn = document.querySelector("#reg-btn");
const inputValue = inputName.value; // 따로 꺼내놨습니다!
const reviewValue = reviewText.value;
const pwValue = inputPw.value;
const storageItems = JSON.parse(localStorage.getItem(currMovieId));
export let dataArr = [];
//페이지 새로고침 시 로컬스토리지에 저장된 데이터 배열에 추가

console.log(storageItems);
if (storageItems) {
  storageItems.forEach((element) => {
    dataArr.push(element);
    $section.innerHTML = "";
    reviewReadTemp(dataArr);
  });
}

// 선택사항 - 시간 추가
let now_date = new Date(); // 시간 생성자 : 현재 날짜와 시간을 가지는 객체를 뤼턴
let year = new Date().getFullYear(); // Date객체의 년도를 가져옴
let month = new Date().getMonth() + 1; // Date객체의 월 정보를 가져옴 => 컴퓨터상 1월이 0으로 표현되서, 보이는 건 1이어야하니  +1을 해줌
let date = new Date().getDate(); // Date객체의 일자 정보를 가져옴 (0~31)
let hour = new Date().getHours(); // Date객체의 시간을 가져옴 (0~23)
let minute = new Date().getMinutes(); // 분 정보를 가져옴 (0~59)

minute = minute < 10 ? "0" + minute : minute; //10보다 작으면 0을 붙여줘.
hour = hour < 10 ? "0" + hour : hour; // 이하동문

export let datelist = [year, month, date, hour, minute]; //date 리스트

// 등록 버튼 클릭 시 데이터 객체로 저장 및 배열에 추가
function getReviewDatas() {
  const randomNumber = String(Math.floor(Math.random() * 10000) + 1);

  const reviewData = {
    movieId: currMovieId,
    userId: randomNumber,
    name: inputName.value,
    pw: inputPw.value,
    review: reviewText.value,
    datelist: datelist,
    now_date: now_date,
  };
  dataArr.push(reviewData);
  localStorage.setItem(currMovieId, JSON.stringify(dataArr));
  reviewReadTemp(dataArr); // 조회를 여기에 추가했습니다.

  // 입력 끝난 후 input 비워주기
  inputName.value = "";
  reviewText.value = "";
  inputPw.value = "";
}

// 등록 버튼 클릭 이벤트
regBtn.addEventListener("click", (e) => {
  e.preventDefault();
  //기존의 내용이 있으면 지우고
  $section.innerHTML = "";
  // 데이터를 추가
  getReviewDatas();
});

//삭제 함수 =========================================
//reviewDel.js
export const reviewDel = async ($readDivMovieId, e) => {
  e.preventDefault();
  const datas = await JSON.parse(localStorage.getItem(currMovieId));
  const currPw = await e.target.parentNode.children[0].children[1].value;
  const currPwFocus = e.target.parentNode.children[0].children[1];
  const currUserId = e.currentTarget.id;

  //로컬 스토리지에서 삭제하려는 애와 다른 id를 가진 애들 추출한 값
  dataArr = datas.filter((local) => {
    return local.userId !== currUserId; // 고유 id 들어오면 고유 id
  });

  // id와 같은 객체 정보 로컬 스토리지에서 가져오기
  const delView = datas.find((local) => local.userId === currUserId);
  let storagePw = delView.pw; // 일치하는 스토리지 자료의 비밀번호

  // 유효성 검사 ===============================================
  // 비밀번호 칸에 아무것도 안 적었을 경우=======================
  const PwBlankRegExp = currPw.replace(blankPattern, "") === "";

  //비밀번호가 일치하지 않을 경우================================
  if (currPw.length !== 4 && currPw.length > 0) {
    alert("비밀번호는 4자리로 입력해주세유!");
    currPwFocus.focus();
    return;
  }
  // 비밀번호 input에 아무것도 안 적고 삭제버튼을 눌렀을 경우=====
  if (PwBlankRegExp || currPw.length === 0) {
    alert("비밀번호를 적어주세유!");
    currPwFocus.focus();
    return;
  }
  //삭제할 글과 일치하는 스토리지 자료의 비밀번호와===============
  //현재 삭제할 글의 비밀번호가 다른 경우
  if (storagePw !== currPw) {
    alert("비밀번호가 틀려버렸어유! 비밀번호 확인 후 다시 입력해 주세유!");
    currPwFocus.focus();
    return;
  } else if (window.confirm("정말 삭제하시겠어유?") === true) {
    alert("댓글이 삭제되었습니다!");
  } else {
    alert("댓글 삭제를 취소하셨어유...");
    return;
  }

  // 이전 중복되는 기록 지워주기
  $readDivMovieId.innerHTML = "";
  // 삭제할 데이터를 뺀 남은 데이터들로 새로 로컬 스토리지에 세팅.
  localStorage.setItem(currMovieId, JSON.stringify(dataArr));
};
