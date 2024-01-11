//reviewRead.js - 해당 영화의 상세페이지의 댓글 내용을
// 예시 데이터
const $section = document.querySelector("#review");
console.log($section);
const review = {
  data: [
    {
      id: "1",
      name: "멍멍",
      review: "최고의 영화였습니다.",
      password: 1234,
    },
    {
      id: "2",
      name: "야옹",
      review: "완전 최고의 영화였습니다.",
      password: 5678,
    },
  ],
};
const movieidArr = [
  { movieid: "278", title: "쇼생크머시기" },
  { movieid: "238", title: "대부쨩" },
];
//localstorage.setItem("review" : )
console.log({ review: review.data });

const datas = [...review.data, ...movieidArr];
console.log(datas);

review.data.map((arr) => {
  const { id, name, review, password } = arr;
  return $section.insertAdjacentHTML(
    "beforeend",
    `
          <div readid="${id}">
              <p>${review}</p>
              <p>작성자: ${name}</p>
              <input type="password" placeholder="password" />
              <button type="submit" id="">삭제</button>
            </div>
        `
  );
});

// localStorage.setItem("review", JSON.stringify(data));
