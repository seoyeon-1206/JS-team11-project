// 1. 영화 데이터를 가져와서 화면에 출력
import { showMovieList } from "./movie.js";
showMovieList();

// 2. 영화 검색
import { filterArr } from "./search.js";

const searchInput = document.querySelector("#search-input");
searchInput.focus();

const form = document.querySelector("#search-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (searchInput.value === "") {
    alert("영화제목을 입력하세요!");
    return;
  } else {
    filterArr(searchInput.value);
  }
});

//  SMYM 클릭 시 home으로 이동
const home = document.getElementById("h1");
home.addEventListener("click", function () {
  window.location.href = "https://show-your-movie.vercel.app";
});
