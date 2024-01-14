//reviewReadTemp.js
import { $section } from "./reviewReadValues.js";
import { reviewDel } from "../reviewReg.js";

//리뷰 조회 템플릿
export const reviewReadTemp = (arr) => {
  arr.map((el) => {
    const { userId, pw, name, review, movieId } = el;

    const $readDivMovieId = document.createElement("div");
    $readDivMovieId.setAttribute("movieid", `${movieId}`);

    const $readDivReadId = document.createElement("div");
    $readDivReadId.setAttribute("readid", `${userId}`);
    $readDivReadId.setAttribute("class", "read-id");
    $readDivReadId.innerText = `id: ${userId}`;

    const $readPreview = document.createElement("p");
    $readPreview.innerText = `${review}`;

    const $readPuserName = document.createElement("p");
    $readPuserName.setAttribute("class", "user-name");
    $readPuserName.innerText = `작성자`;
    $readPuserName.innerHTML = `<span class="name">${name}</span>`;

    const $readInput = document.createElement("input");
    $readInput.setAttribute("type", "password");
    $readInput.setAttribute("maxLength", "4");
    $readInput.setAttribute("placeholder", "password");
    $readInput.setAttribute("class", "pass-word");

    const $readButton = document.createElement("button");
    $readButton.setAttribute("type", "submit");
    $readButton.setAttribute("class", "review-del-btn");
    $readButton.setAttribute("id", `${userId}`);
    $readButton.innerText = `삭제`;
    $readButton.addEventListener("click", (e) => reviewDel($readDivMovieId, e));

    $readDivMovieId.append($readDivReadId);
    $readDivMovieId.append($readPreview);
    $readDivMovieId.append($readPuserName);
    $readDivMovieId.append($readInput);
    $readDivMovieId.append($readButton);

    return $section.insertAdjacentElement("afterbegin", $readDivMovieId);
  });
};

export default reviewReadTemp;
