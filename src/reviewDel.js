//reviewDel.js
import { $section, currMovieId } from "./reviewRead.js";
import { reviewReadTemp } from "./items/reviewReadTemp.js";

export const localDatas = JSON.parse(localStorage.getItem(currMovieId));
export const datas = [...localDatas];
const $delBtn = document.querySelector("#review-del-btn");
//삭제 함수

let commentArr = [];
const reviewDel = (e) => {
  e.preventDefault();
  console.log(`======로컬 데이터가 들어옵니다`, datas);
  const { movieId, userId, name, pw, review } = datas; //userId는 숫자로 들어옴
  const delBtn = e.target;
  const currUserId = delBtn.closest("#review-read").querySelector("div>div")
    .attributes.readid.value;
  const currPw = delBtn.closest("#review-read").querySelector("input").value;
  const currName = delBtn
    .closest("#review-read")
    .querySelector("div>p>span").innerText;
  const currText = delBtn
    .closest("#review-read")
    .querySelector("div>p").innerText;
  //삭제값 삭제되고 남을 애들 선별-삭제하려는 애와 다른 id를 가진 애들 추출한 값(
  const viewAfterDel = datas.filter((local) => {
    return local.userId !== currUserId; // 고유 id 들어오면 고유 id
  });
  console.log(viewAfterDel);

  //로컬 스토리지에 해당 지정한 글과 일치하는 비밀번호
  const delView = datas.find((local) => {
    console.log(local);
    const localId = local.userId;
    console.log(localId);
    const localPw = local.pw;
    console.log(localPw);
    const findValue = localId.includes(currUserId);
    return findValue;
  });
  console.log(delView);
  console.log(delView.pw);

  $section.innerHTML = "";
  reviewReadTemp(viewAfterDel);
  localStorage.setItem(currMovieId, JSON.stringify(viewAfterDel));

  //
  // delView
  // ? localStorage.setItem(currMovieId, JSON.stringify(viewAfterDel))
  // : alert("비밀번호를 다시 입력해주세요!");

  console.log({ "현재 글의 movieId": currMovieId });
  console.log({ "현재 글의 작성자 id": currUserId });
  console.log({ "현재 글의 작성자": currName });
  console.log({ "현재 글의 작성글": currText });
  console.log({ "현재 글의 비밀번호": currPw });
  console.log({ "현재 글의 영화 id": currMovieId });
};

$delBtn.addEventListener("click", reviewDel);
