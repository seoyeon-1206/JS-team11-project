const showMovieDetail = async () => {
    try {
        const details = await fetchMovieDetail();

        const movieDetail = document.querySelector("#detail-list");
        movieDetail.innerHTML = `
        <li class="movie-detail" id=${details.id}>
            <img src="https://image.tmdb.org/t/p/w500${details.poster_path}" alt="${details.title}">
            <h3>${details.title}</h3>
            <p>개봉날짜: ${details.release_date}</p>
            <p>장르: ${details.genres.map(genre => genre.name).join(', ')}</p>
            <p>평점: ${details.vote_average}</p>
            <p>상영시간: ${details.runtime}</p>
            <p>overview: ${details.overview}</p>
        </li>
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
