import axios from 'axios';

const BASE_URL = 'https://api.nasa.gov';
const API_KEY = process.env.REACT_APP_NASA_API_KEY;

const http = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

http.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    api_key: API_KEY,
  };
  return config;
});

const HttpClient = {
  getPictureOfTheDay: () => {
    return http.get('/planetary/apod');
  },
  getPictureOfTheDayAt : (getDate) => {
    return http.get('planetary/apod', {
      params: {
        date: getDate,
      }
    })
  },
  getMarsWeather: () => {
    return http.get('/insight_weather/', {
      params: {
        feedtype: 'json',
        ver: '1.0',
      }
    });
  },
  searchImages: (query, page = 1) => {
    return http.get('/search', {
      params: {
        q: query,
        page: page,
      },
    });
  },
};
export default HttpClient;