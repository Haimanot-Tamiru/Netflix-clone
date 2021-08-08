import axios from 'axios';
const instance = axios.create({
  // this baseurl is common for all movie requiest
  baseURL: "https://api.themoviedb.org/3",
});
//instance.get('movie/top_rated');

export default instance