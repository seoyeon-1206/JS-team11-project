const showMovieDetail = async () => {
    try {
        const details = await fetchMovieDetail();
        const releaseDate = new Date(details.release_date);
        const formattedReleaseDate = `${releaseDate.getFullYear()}년 ${releaseDate.getMonth()}월 ${releaseDate.getDate()}일`;

        const runtimeInMinutes = details.runtime;
        const hours = Math.floor(runtimeInMinutes/60);
        const minutes = runtimeInMinutes % 60;
        const formattedRuntime = `${hours}시간 ${minutes}분`

        const movieDetail = document.querySelector(".movie-description");
        movieDetail.innerHTML = `
        <img class="movie-poster" src="https://image.tmdb.org/t/p/w500${details.poster_path}" alt="${details.title}">
            <div class="movie-detail">
              <h3 class="movie-title">${details.title}</h3>
              <ul class="movie-detail-list">  
                <li>${formattedReleaseDate}</li> 
                <li>${formattedRuntime}</li> 
                <li>${details.genres.map(genre => genre.name).join(', ')}</li>
                <li>${details.vote_average}</li> 
              </ul>
              <p class="movie-overview">${details.overview}</p>
            </div>
        `;
    } catch (error) {
        console.error("영화 상세 정보를 가져오는 중 오류 발생:", error);
    }
};

async function fetchMovieDetail() {
    const movieId = 123; // 임시 ID

    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNTA0YmVlZjQxZjYxNGQxMWZlZDQxZTAwYWFmZjg0YSIsInN1YiI6IjY1OTc5NmJmNWNjMTFkNzc2ZTdkODQyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IZ78_IkpDpSstACHGP0dddrf52ji2H0-nnKLnae_aQM'

        },
    };

    const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?language=ko-KR`,
        options
    );

    if (!response.ok) {
        throw new Error(`영화 상세 정보를 가져오지 못했습니다: ${response.status}`);
    }

    const data = await response.json();
    return data;
}

showMovieDetail()
