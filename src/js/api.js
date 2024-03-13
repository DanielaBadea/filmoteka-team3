import axios from 'axios';

import { API_KEY } from './constants';
axios.defaults.baseURL = `https://api.themoviedb.org/3`;

export const IMG_BASE_URL = `https://image.tmdb.org/t/p`;
export const IMG_W500 = `/w500`;
export const IMG_W400 = `/w400`;
export const IMG_W300 = `/w300`;
export const IMG_W200 = `/w200`;
export const IMG_W100 = `/w100`;
export const IMG_ORIG = `/original`;

export const getTrending = async (page = 1) => {
  const url = `/trending/movie/week?api_key=${API_KEY}&page=${page}`;
  const { data } = await axios.get(url);
  return data;
};

export const getSearchMovie = async (query, page) => {
  const { data } = await axios.get(
    `/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}`
  );
  return data;
};

export const getMovieDetails = async id => {
  const { data } = await axios.get(`/movie/${id}?api_key=${API_KEY}`);
  return data;
};

export const getMovieGenres = async () => {
  const { data } = await axios.get(`/genre/movie/list?api_key=${API_KEY}`);
  return data;
};
