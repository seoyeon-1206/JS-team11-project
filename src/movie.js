export const showMovieList = async () => {
  const movies = await fetchMovieData();

  const cardList = document.querySelector("#card-list");
  cardList.innerHTML = movies
    .map(
      (movie) =>
        `<li class="movie-card" id=${movie.id}>
      <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.original_title}">
      <h3 class="movie-title">${movie.original_title} / ${movie.title}</h3>
      <p>${movie.overview}</p><br>
      <p>평점 : ${movie.vote_average}</p>
      </li>`
    )
    .join("");

  cardList.addEventListener("click", clickCard);

  function clickCard(event) {
    const url = "detail.html?id=";

    if (event.target === cardList) return;

    if (event.target.matches(".movie-card")) {
      window.location.href = url + event.target.id;
    } else {
      window.location.href = url + event.target.parentNode.id;
    }
  }
};

export async function fetchMovieData() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOTM3YTE2N2YxZTA5ZGYwNDM4ZDI1NmZiNThjZTQ0YyIsInN1YiI6IjY1OTk4NGI3MWQxYmY0MDFhOGU1NWZiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TAtSAqF7Eikmbg_lzzouG1BSYyyVwe8MO9Hkr-0XTwg",
    },
  };
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&page=1",
    options
  );
  const data = await response.json();
  return data.results;
}
