//reviewRead.js - 해당 영화의 상세페이지의 댓글 내용을
const movieId = 123; // 이건 페이지가 연결되면 안 써도 괜춘
const url = new URL(
  `https://api.themoviedb.org/3/movie/${movieId}?language=ko-KR` //location.href;
);
export const currMovieId = url.pathname.split("/3/movie/")[1]; //123
export const $section = document.querySelector("#review-read");
export const $readId = document.querySelectorAll("#review-read");
export const localDatas = JSON.parse(localStorage.getItem("data"));
export const datas = [...localDatas];
console.log(datas);
export const reviewReadTemp = (arr) => {
  arr.map((el) => {
    const {
      nameVal,
      textVal,
      pwVal,
      reviewid,
      name,
      review,
      password,
      movieid,
    } = el;
    return $section.insertAdjacentHTML(
      "beforeend",
      `
           <div movieid="${currMovieId}">
               <div readid="${reviewid}">id: ${reviewid}</div>
               <p>${textVal}</p>
               <p class="userName">작성자: <span class="name">${nameVal}</span></p>
               <input type="password" maxlength="4" placeholder="password" />
               <button type="submit" id="review-del-btn">삭제</button>
            </div>
        `
    );
  });
};

reviewReadTemp(datas);
