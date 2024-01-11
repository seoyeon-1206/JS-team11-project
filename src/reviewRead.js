//reviewRead.js - 해당 영화의 상세페이지의 댓글 내용을
export const $section = document.querySelector("#reviewRead");
export const $movieId =
  document.querySelector(".movie-id").attributes["movieid"].value;
export const $readId = document.querySelectorAll("#reviewRead");
//임시 데이터
const reviews = {
  data: [
    {
      movieid: `${$movieId}`,
      reviewid: "2",
      name: "멍멍",
      review: "최고의 영화였습니다.",
      password: 1234,
    },
    {
      movieid: `${$movieId}`,
      reviewid: "3",
      name: "야옹",
      review: "완전 최고의 영화였습니다.",
      password: 5678,
    },
  ],
};

//localStorage사용 시, 할당되는 값 const datas = JSON.parse(localStorage.getItme("데이터들은 key이름"))
const datas = [...reviews.data];
console.log(datas);
//localStorage이용할 시, reviews.data 대신 datas 사용예정.
datas.map((arr) => {
  const { reviewid, name, review, password, movieid } = arr;
  return $section.insertAdjacentHTML(
    "beforeend",
    `
           <div movidid="${movieid}">
               <div readid="${reviewid}">id: ${reviewid}</div>
               <p>${review}</p>
               <p>작성자: ${name}</p>
               <input type="password" placeholder="password" />
               <button type="submit" id="">삭제</button>
            </div>
        `
  );
});
