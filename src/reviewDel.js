//reviewDel.js
import { $section, currMovieId } from "./reviewRead.js";
import { reviewReadTemp } from "./items/reviewReadTemp.js";
import { dataArr } from "./reviewReg.js";

export const localDatas = JSON.parse(localStorage.getItem(currMovieId));
export const datas = [...localDatas];
const $delBtn = document.querySelector("#review-del-btn");
//삭제 함수
let nexTdataArr = [];

const reviewDel = (e) => {
  e.preventDefault();
  console.log(`======로컬 데이터가 들어옵니다`, datas);
  const delBtn = e.target;
  const currPw = delBtn.closest("#review-read").querySelector("input").value;
  const currUserId = delBtn.closest("#review-read").querySelector("div>div")
    .attributes.readid.value;

  //로컬 스토리지에 해당 지정한 글과 일치하는 비밀번호
  const delView = datas.find(
    (local) => local.userId === currUserId && local.pw === currPw
  );
  console.log(delView);
  console.log(delView.pw);
  console.log(currPw);
  //삭제값 삭제되고 남을 애들 선별-삭제하려는 애와 다른 id를 가진 애들 추출한 값
  let viewItems = datas.filter((local) => {
    console.log(local);
    return local.userId !== currUserId; // 고유 id 들어오면 고유 id
  });

  console.log(viewItems);
  //로컬에 먼저 정하고

  reviewReadTemp(nexTdataArr);
  // nexTdataArr.push(viewItems);
  localStorage.setItem(currMovieId, JSON.stringify(nexTdataArr));
  console.log(nexTdataArr);
};

$delBtn.addEventListener("click", reviewDel);

// console.log({ "현재 글의 movieId": currMovieId });
// // console.log({ "현재 글의 작성자 id": currUserId });
// console.log({ "현재 글의 비밀번호": currPw });
//
// delView
// ? localStorage.setItem(currMovieId, JSON.stringify(viewAfterDel))
// : alert("비밀번호를 다시 입력해주세요!");

// const currName = delBtn
//   .closest("#review-read")
//   .querySelector("div>p>span").innerText;

//  const currText = delBtn
//    .closest("#review-read")
//   .querySelector("div>p").innerText;

//     dataArr.push(viewAfterDel);

// console.log({ "현재 글의 작성자": currName });
// console.log({ "현재 글의 작성글": currText });
// console.log({ "현재 글의 영화 id": currMovieId });
