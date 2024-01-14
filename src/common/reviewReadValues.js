// reviewReadDel- 삭제기능 부분
export const currMovieId = new URL(location.href).search.split("?")[1];
export const $section = document.querySelector("#review-read");
export const $readId = document.querySelectorAll("#review-read");
export const localDatas = JSON.parse(localStorage.getItem(currMovieId));
export const datas = localDatas;
export const blankPattern = /^\s+|\s+$/g; // 유효성 - 공백만 있을 경우
