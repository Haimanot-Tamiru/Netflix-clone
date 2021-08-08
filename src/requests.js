const API_KEY = "eddb7cc644bf1eeb4ee524a0e4680464";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchTVMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10770&Certification=PG&certification_country=Us`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&Certification=PG&certification_country=Us`,
  fetchMusic: `/discover/movie?api_key=${API_KEY}&with_genres=10402&Certification=PG&certification_country=Us`,
};
export default requests;

  
