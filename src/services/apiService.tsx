import axios from "axios";

import {baseURL} from "../constants/urls";

const apiService = axios.create({baseURL});

apiService.interceptors.request.use(request => {
    request.headers.Authorization = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDg1Y2Y3NGZmOTAwMjk0YzliYzU0N2Y1ZmJjODZkYiIsIm5iZiI6MTcxOTA2NDkxOS4xNzgwNDQsInN1YiI6IjY2NmVjOWI3MzBmMzkzYThlMjZiYmVjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qzrc493C968ehXMNsPl0sXc2nci4KlM6WmwEoY6rAug';
    return request;
});

export {
    apiService
}