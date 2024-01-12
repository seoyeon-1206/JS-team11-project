const reviewText = document.querySelector("#review-text");
const inputName = document.querySelector("#input-name");
const inputPw = document.querySelector("#input-pw");
const regBtn = document.querySelector("#reg-btn");
// const movieId = document.querySelector('.movie-id').attributes['movieid'].value;

// 등록 버튼 클릭 시 데이터 객체로 저장 및 배열에 추가
const dataArr = [];
const getReviewDatas = function (textVal, nameVal, pwVal) {
  const reviewData = {
    textVal,
    nameVal,
    pwVal,
  };

  dataArr.push(reviewData);
  const jsonDataArr = JSON.stringify(dataArr);
  localStorage.setItem("data", jsonDataArr);
};

// 등록 버튼 클릭 이벤트
regBtn.addEventListener("click", (e) => {
  e.preventDefault();
  getReviewDatas(reviewText.value, inputName.value, inputPw);
});
