const baseURL = 'https://api.themoviedb.org/3';
const api_key = '5485cf74ff900294c9bc547f5fbc86db';

const endpoints = {
    movies: '/discover/movie',
    genres: '/genre/movie/list'
};

const urls = {
    movies: {
        discover: `${baseURL}${endpoints.movies}`
    },
    genres: {
        list: `${baseURL}${endpoints.genres}`
    }
};

export {
    baseURL,
    api_key,
    urls
};