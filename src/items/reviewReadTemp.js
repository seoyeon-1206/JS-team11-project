//reviewReadTemp.js
import { $section, currMovieId } from "../reviewRead.js";

//리뷰 조회 템플릿
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

export default reviewReadTemp;
