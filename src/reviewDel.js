//reviewDel.js
import { currMovieId } from "./reviewRead.js";
import { reviewReadTemp } from "./items/reviewReadTemp.js";

export const localDatas = JSON.parse(localStorage.getItem("data"));
export const datas = [...localDatas];
const $delBtn = document.querySelector("#review-del-btn");
//삭제 함수
const reviewDel = (e) => {
  console.log(`======로컬 데이터가 들어옵니다`, datas);
  // datas.forEach((local) => {
  const { nameVal, textVal, pwVal } = datas;
  const delBtn = e.target;
  const currReadId = delBtn.closest("#review-read").querySelector("div>div")
    .attributes.readid.value;
  const currPw = delBtn.closest("#review-read").querySelector("input").value;
  const currName = delBtn
    .closest("#review-read")
    .querySelector("div>p>span").innerText;
  const currText = delBtn
    .closest("#review-read")
    .querySelector("div>p").innerText;
  //삭제하려는 애와 다른 id를 가진 애들 추출한 값
  const viewAfterDel = datas.filter((local) => {
    console.log(local);
    return local.nameVal !== currName; // 고유 id 들어오면 고유 id
  });

  console.log(viewAfterDel);
  const ReviewDataOfMovie = JSON.stringify(viewAfterDel);

  // 삭제하려는 애와 다른 id를 가진 애들만 "보여주고"

  //삭제하기. 조건.
  // // try {
  if (name === currPw) {
    console.log(nameVal);
    //   //패스워드 들어오면 패스워드
    //   console.log(nameVal, `=${currName}`);
    //   console.log(`스토리지 정보가 삭제됩니다.`);
    //   //해당 값이 들어가 있는,, 로컬 스토리지 값 삭제
    localStorage.setItem(currMovieId, ReviewDataOfMovie);
    //   console.log(1);
  }
  // } catch (err) { console.log(err) }
  console.log({ "현재 글의 movieId": currMovieId });
  console.log({ "현재 글의 작성자 id": currReadId });
  console.log({ "현재 글의 작성자": currName });
  console.log({ "현재 글의 작성글": currText });
  console.log({ "현재 글의 비밀번호": currPw });
  console.log({ "현재 글의 영화 id": currMovieId });
  // });
};

$delBtn.addEventListener("click", reviewDel);
