import reviewReadTemp from "./items/reviewReadTemp.js";
import { $section } from "./reviewRead.js";

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
if (storageItems) {
  storageItems.forEach((element) => {
    dataArr.push(element);
    $section.innerHTML = "";
    return reviewReadTemp(dataArr);
  });
}

// 등록 버튼 클릭 시 데이터 객체로 저장 및 배열에 추가
function getReviewDatas() {
  const randomNumber = String(Math.floor(Math.random() * 10000) + 1);

  const reviewData = {
    movieId: currMovieId,
    userId: randomNumber,
    name: inputName.value,
    pw: inputPw.value,
    review: reviewText.value,
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
