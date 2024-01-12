//reviewDel.js
import { currMovieId, $section, reviewReadTemp } from "./reviewRead.js";

export const localDatas = JSON.parse(localStorage.getItem("data"));
export const datas = [...localDatas];
const $delBtn = document.querySelector("#review-del-btn");
const reviewDel = (e) => {
  console.log(`======로컬 데이터가 들어옵니다`, datas);
  datas.forEach((local) => {
    const { nameVal, textVal, pwVal } = local;
    const currReadId = e.target.closest("#review-read").querySelector("div>div")
      .attributes.readid.value;
    const currPw = e.target
      .closest("#review-read")
      .querySelector("input").value;
    const currName = e.target
      .closest("#review-read")
      .querySelector("div>p>span").innerText;
    const currText = e.target
      .closest("#review-read")
      .querySelector("div>p").innerText;
    const viewAfterDel = datas.filter((local) => {
      console.log(local);
      return local.nameVal !== currName; // 고유 id 들어오면 고유 id
    });

    reviewReadTemp(viewAfterDel);
    if (nameVal === currName) {
      //패스워드 들어오면 패스워드
      console.log(nameVal, `=${currName}`);
      console.log(`스토리지 정보가 삭제됩니다.`);
      localStorage.removeItem("nameVal");
      localStorage.removeItem("textVal");
      localStorage.removeItem("pwVal");
      console.log(1);
      // localStorage.removeItem("");
    }

    console.log({ "현재 글의 movieId": currMovieId });
    console.log({ "현재 글의 작성자 id": currReadId });
    console.log({ "현재 글의 작성자": currName });
    console.log({ "현재 글의 작성글": currText });
    console.log({ "현재 글의 비밀번호": currPw });
    console.log({ "현재 글의 비밀번호": currMovieId });
  });
};

$delBtn.addEventListener("click", reviewDel);

// local.movieid === currMovieId &&
// local.readid === currReadId &&
// pwVal === currPw

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
