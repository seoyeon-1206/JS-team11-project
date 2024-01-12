const reviewText = document.querySelector("#review-text");
const inputName = document.querySelector("#input-name");
const inputPw = document.querySelector("#input-pw");
const regBtn = document.querySelector("#reg-btn");
const currMovieId = new URL(location.href).search.split("?")[1];

let dataArr = [];
// 등록 버튼 클릭 시 데이터 객체로 저장 및 배열에 추가
const getReviewDatas = function (review, name, pw) {
  const randomNumber = Math.floor(Math.random() * 10000) + 1;

  const reviewData = {
    movieId: currMovieId,
    userId: randomNumber,
    name,
    pw,
    review,
  };
  dataArr.push(reviewData);

  localStorage.setItem(currMovieId, JSON.stringify(dataArr));
};

// 페이지 새로고침 시 로컬스토리지에 저장된 데이터 배열에 추가
const storageItems = JSON.parse(localStorage.getItem(currMovieId));
if (storageItems) {
  storageItems.forEach(element => {
    dataArr.push(element);
  });
}

// 등록 버튼 클릭 이벤트
regBtn.addEventListener("click", (e) => {
  e.preventDefault();
  getReviewDatas(reviewText.value, inputName.value, inputPw.value);
});
