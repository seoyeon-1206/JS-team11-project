//reviewReadTemp.js
import { $section } from "./reviewReadValues.js";
import { reviewDel } from "../reviewReg.js";

//리뷰 조회 템플릿
export const reviewReadTemp = (arr) => {
  arr.map((el) => {
    const { userId, pw, name, review, movieId, datelist, now_date } = el;
    /* 연월일, 시간 구분표시 */
    let y_m_d = datelist.slice(0, 3).join("-"); // ex) 2023-12-12
    let h_m = datelist.slice(3, 5).join(":"); // ex) 13:22

    const $readDivMovieId = document.createElement("div");
    $readDivMovieId.setAttribute("movieid", `${movieId}`);

    const $readDivReadId = document.createElement("div");
    $readDivReadId.setAttribute("readid", `${userId}`);
    $readDivReadId.setAttribute("class", "read-id");
    $readDivReadId.innerText = `id: ${userId}`;

    const $readReadDetail = document.createElement("p");
    $readReadDetail.setAttribute("class", "read-detail");
    $readReadDetail.innerText = `${review}`;

    const $readDivReadList = document.createElement("div");
    $readDivReadList.setAttribute("class", "read-list");

    const $readDivReadName = document.createElement("div");
    $readDivReadName.setAttribute("class", "read-name");

    const $readPuserName = document.createElement("p");
    $readPuserName.setAttribute("class", "user-name");
    $readPuserName.innerText = `작성자`;
    $readPuserName.innerHTML = `<span class="name">${name}</span>`;

    //날짜 - 선택사항
    const $readDivDate = document.createElement("p");
    $readDivDate.setAttribute("class", "user-date");
    $readDivDate.innerHTML = `<span class= "date">${y_m_d + " " + h_m}</span>`;

    const $readDivReadRight = document.createElement("div");
    $readDivReadRight.setAttribute("class", "read-right");

    const $readDivReadPw = document.createElement("div");
    $readDivReadPw.setAttribute("class", "read-pw");

    const $readSpanPw = document.createElement("span");
    $readSpanPw.innerText = "비밀번호";

    const $readInput = document.createElement("input");
    $readInput.setAttribute("type", "password");
    $readInput.setAttribute("maxLength", "4");
    $readInput.setAttribute("placeholder", "");
    $readInput.setAttribute("class", "pass-word-input-del-pw");

    const $readButton = document.createElement("button");
    $readButton.setAttribute("type", "submit");
    $readButton.setAttribute("class", "review-del-btn");
    $readButton.setAttribute("id", `${userId}`);
    $readButton.innerText = `삭제`;
    $readButton.addEventListener("click", (e) => reviewDel($readDivMovieId, e));
    // 구성하는 라인
    $readDivMovieId.append($readDivReadId);
    $readDivMovieId.append($readReadDetail);
    $readDivMovieId.append($readDivReadList);

    $readDivReadList.append($readDivReadName);
    $readDivReadList.append($readDivReadRight);

    $readDivReadName.append($readPuserName);
    $readDivReadName.append($readDivDate);

    $readDivReadRight.append($readDivReadPw);
    $readDivReadRight.append($readButton);

    $readDivReadPw.append($readSpanPw);
    $readDivReadPw.append($readInput);

    return $section.insertAdjacentElement("afterbegin", $readDivMovieId);
  });
};

export default reviewReadTemp;
