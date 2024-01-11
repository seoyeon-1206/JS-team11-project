import { $movieId, $section, datas } from "./reviewRead.js";

//reviewDel.js
const $delBtn = document.querySelector("#review-del-btn");
// const reviewTemp = datas.map((arr) => {
//   const { reviewid, name, review, password, movieid } = arr;
//   return $section.insertAdjacentHTML(
//     "beforeend",
//     `
//         <div movidid="${movieid}">
//         <div readid="${reviewid}">id: ${reviewid}</div>
//         <p>${review}</p>
//         <p>작성자: ${name}</p>
//         <input type="password" placeholder="password" />
//         <button type="submit" id="review-del-btn">삭제</button>
//         </div>
//         `
//   );
// });
const isShow = false;

console.log(datas);

const reviewDel = () => {
  //   e.preventDefault();
  console.log(datas);
  console.log($movieId);

  // reivew(storageData)스토리지 데이터의 document상의 movieid, id, password와
  datas.filter((arr) => console.log(1));
  // doc 내부의 보이는 movieid, id, password를 비교해서 다를 때 review-read 붙이고
  // 같으면 localStorage 데이터 삭제를 이용해서 로컬 데이터를 삭제해줘.
};

$delBtn.addEventListener("click", reviewDel);
