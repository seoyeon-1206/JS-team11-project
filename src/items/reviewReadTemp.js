//reviewReadTemp.js
import { $section } from "../reviewRead.js";

//리뷰 조회 템플릿
export const reviewReadTemp = (arr) => {
  arr.map((el) => {
    const { userId, pw, name, review, movieId } = el;
    return $section.insertAdjacentHTML(
      "beforeend",
      `
           <div movieid="${movieId}">
               <div readid="${userId}">id: ${userId}</div>
               <p>${review}</p>
               <p class="userName">작성자: <span class="name">${name}</span></p>
               <input type="password" maxlength="4" placeholder="password" />
               <button type="submit" id="review-del-btn">삭제</button>
            </div>
        `
    );
  });
};

export default reviewReadTemp;
