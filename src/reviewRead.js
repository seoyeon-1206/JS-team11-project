//reviewRead.js - 해당 영화의 상세페이지의 댓글 내용을
export const $section = document.querySelector("#review-read");
const movieId = 123; // 이건 페이지가 연결되면 안
const url = new URL(
  `https://api.themoviedb.org/3/movie/${movieId}?language=ko-KR` //location.href;
);
export const currMovieId = url.pathname.split("/3/movie/")[1]; //123
export const $readId = document.querySelectorAll("#review-read");
export const localDatas = JSON.parse(localStorage.getItem("data"));

//localStorage사용 시, 할당되는 값 const datas = JSON.parse(localStorage.getItme("데이터들은 key이름"))
export const datas = [...localDatas];
console.log(datas);
//localStorage이용할 시, reviews.data 대신 datas 사용예정.
datas.map((arr) => {
  const { nameVal, textVal, pwVal, reviewid, name, review, password, movieid } =
    arr;
  return $section.insertAdjacentHTML(
    "beforeend",
    `
           <div movieid="${currMovieId}">
               <div readid="${reviewid}">id: ${reviewid}</div>
               <p>${textVal}</p>
               <p class="userName">작성자: <span>${nameVal}</span></p>
               <input type="password" placeholder="password" />
               <button type="submit" id="review-del-btn">삭제</button>
            </div>
        `
  );
});
