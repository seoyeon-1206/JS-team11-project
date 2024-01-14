// reviewReadDel- 삭제기능 부분
export const currMovieId = new URL(location.href).search.split("?")[1];
export const $section = document.querySelector("#review-read");
export const $readId = document.querySelectorAll("#review-read");
export const localDatas = JSON.parse(localStorage.getItem(currMovieId));
export const datas = localDatas;
