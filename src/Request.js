const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3/";
const request = {
  fetchTrending: `${BASE_URL}trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `${BASE_URL}movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `${BASE_URL}discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28`,
  fetchComedyMovies: `${BASE_URL}discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35`,
  fetchHorrorMovies: `${BASE_URL}discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27`,
  fetchRomanceMovies: `${BASE_URL}discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10749`,
  fetchDocumentaries: `${BASE_URL}discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=99`,
  fetchWesternMovies: `${BASE_URL}discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=37`,
  fetchAnimationMovies: `${BASE_URL}discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16`,
  fetchTV: `${BASE_URL}discover/tv?api_key=${API_KEY}&language=en-US`,
};

export default request;
