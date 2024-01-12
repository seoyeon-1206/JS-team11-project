import { currMovieId, $section, datas } from "./reviewRead.js";

//reviewDel.js
const $delBtn = document.querySelector("#review-del-btn");

const reviewReadTemp = (arr) => {
  arr.map((el) => {
    const { reviewid, name, review, password, movieid } = el;
    return $section.insertAdjacentHTML(
      "beforeend",
      `
        <div movidid="${currMovieId}">
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
// const localData = [...datas];
console.log(datas); //localStorage 데이터

const reviewDel = (e) => {
  console.log(datas);
  datas.forEach((local) => {
    const { nameVal, textVal, pwVal } = local;
    //현재 페이지의 써진 댓글 별 id
    const currReadId = e.target.closest("#review-read").querySelector("div>div")
      .attributes.readid.value;
    //현재 페이지의 삭제 하려는 댓글의 비밀번호
    const currPw = e.target
      .closest("#review-read")
      .querySelector("input").value;

    const currName1 = document.querySelector("div");
    const currName = e.target.closest("#review-read").querySelector("div>p");
    console.log(currName);
    const currText = e.target.closest("#review-read").querySelector("div");
    console.log(currText);

    console.log({ "현재 글의 작성자": 아직 });
    console.log({ "현재 글의 작성글": 아직 });
    console.log({ "현재 글의 비밀번호": currPw });
    console.log({ "현재 글의 비밀번호": currPw });
    // reivew(storageData)스토리지 데이터의 document상의 movieid, id, password와
    if (
      local.movieid === currMovieId &&
      local.readid === currReadId &&
      nameVal === currName
      // && pwVal === currPw
    ) {
      localStorage.removeItem(nameVal);
      localStorage.removeItem(textVal);
      localStorage.removeItem(pwVal);
      // localStorage.removeItem("");
    }
  });
};

$delBtn.addEventListener("click", reviewDel);

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
