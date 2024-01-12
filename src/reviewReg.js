const reviewText = document.querySelector("#review-text");
const inputName = document.querySelector("#input-name");
const inputPw = document.querySelector("#input-pw");
const regBtn = document.querySelector("#reg-btn");

let dataArr = [];
// 등록 버튼 클릭 시 데이터 객체로 저장 및 배열에 추가
const getReviewDatas = function (review, name, pw) {
  
  const currMovieId = new URL(location.href).search.split("?")[1];

  const randomNumber = Math.floor(Math.random() * 10000) + 1;

  const reviewData = {
    movieId: currMovieId,
    userId: randomNumber,
    name,
    pw,
    review,
  };

  dataArr.push(reviewData);
  const data = {
    [currMovieId]: dataArr,
  };
  localStorage.setItem('data', JSON.stringify(data));
};

// 등록 버튼 클릭 이벤트
regBtn.addEventListener("click", (e) => {
  e.preventDefault();
  getReviewDatas(reviewText.value, inputName.value, inputPw.value);
});
