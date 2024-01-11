//영화 내용 가져오기
export const showMovieDetail = async() => {
    const details = await fetchMovieDetail();

}

async function fetchMovieDetail() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNTA0YmVlZjQxZjYxNGQxMWZlZDQxZTAwYWFmZjg0YSIsInN1YiI6IjY1OTc5NmJmNWNjMTFkNzc2ZTdkODQyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IZ78_IkpDpSstACHGP0dddrf52ji2H0-nnKLnae_aQM",
      },
    };
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/movie_id?language=ko-KR",
      options
    );
    const data = await response.json();
    return data.results;
  }