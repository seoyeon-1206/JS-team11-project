import { reviewReadTemp } from "./items/reviewReadTemp.js";

//reviewRead.js - 해당 영화의 상세페이지의 댓글 내용을
// 이건 페이지가 연결되면 안 써도 괜춘
export const currMovieId = new URL(location.href).search.split("?")[1];
// .searchParams.get("movie");
console.log(currMovieId);

export const $section = document.querySelector("#review-read");
export const $readId = document.querySelectorAll("#review-read");
export const localDatas = JSON.parse(localStorage.getItem("data"));
export const datas = [...localDatas];

//리뷰 조회 창에 댓글 뿌리기
reviewReadTemp(datas);
