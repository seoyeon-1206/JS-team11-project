import { currMovieId, $section, datas } from "./reviewRead.js";

//reviewDel.js
const data = datas;
const $delBtn = document.querySelector("#review-del-btn");
const reviewReadTemp = (arr) => {
  arr.map((el) => {
    const { reviewid, name, review, password, movieid } = el;
    return $section.insertAdjacentHTML(
      "beforeend",
      `
        <div movidid="${movieid}">
        <div readid="${reviewid}">id: ${reviewid}</div>
        <p>${review}</p>
        <p>작성자: ${name}</p>
        <input type="password" placeholder="password" />
        <button type="submit" id="review-del-btn">삭제</button>
        </div>
        `
    );
  });
};

console.log(datas);

const reviewDel = (e) => {
  const currReadId = e.target.closest("#review-read").querySelector("div>div")
    .attributes.readid.value;
  //   const currMovieId = e.target.closest("#review-read").querySelector("div")
  //     .attributes.movieid.value;
  const currPassWord = e.target
    .closest("#review-read")
    .querySelector("input").value;
  // reivew(storageData)스토리지 데이터의 document상의 movieid, id, password와
  if (
    datas.movieid === currMovieId &&
    datas.readid === currReadId &&
    datas.password === currPassWord
  ) {
    // localStorage.removeItem();
  }
  //   if (passWord) {
  //     const stayData = datas.filter(
  //       (arr) => arr.movieid !== currMovieId && arr.readid !== currReadId
  //     );
  //     // doc 내부의 보이는 현재 영화의 currMovieId, id, password를 비교해서 다를 때 review-read 붙이고
  //     // 같으면 localStorage 데이터 삭제를 이용해서 로컬 데이터를 삭제해줘.
  //     reviewReadTemp(stayData);
  //   } else {
  //     alert("비밀번호를 입력해 주세요!");
  //   }
};

$delBtn.addEventListener("click", reviewDel);
