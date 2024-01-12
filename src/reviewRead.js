//reviewRead.js - 해당 영화의 상세페이지의 댓글 내용을
const movieId = 123; // 이건 페이지가 연결되면 안 써도 괜춘
const url = new URL(location.href);
export const currMovieId = url.search.split("?")[1]; //123
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
               <p class = "read-deatil">${textVal}</p>
               <div class="read-list">
                <div class="read-name">
                  <p class="userName">작성자: <span class="name">${nameVal}</span></p>
                </div>
                <div class="read-pw">
                  <span>비밀번호</span>
                  <input id="input-pw" type="password" maxlength="4" placeholder="" />
                </div>
                <button type="submit" id="review-del-btn">삭제</button>
              </div>
            </div>
        `
    );
  });
};

reviewReadTemp(datas);
