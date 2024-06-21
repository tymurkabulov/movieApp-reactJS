import axios from 'axios';
import { IMovie } from '../interfaces/IMovie';
import { api_key, baseURL } from '../constants/urls';

interface Params {
    api_key: string;
    page: number;
    query?: string;
}

export const getMovies = async (page: number = 1, searchQuery: string = ''): Promise<{ results: IMovie[], total_pages: number }> => {
    try {
        let endpoint = '/movie/popular';
        let params: Params = {
            api_key: api_key,
            page: page,
        };

        if (searchQuery) {
            endpoint = '/search/movie';
            params['query'] = searchQuery;
        }

        const response = await axios.get(`${baseURL}${endpoint}`, {
            params: params,
        });
        return {
            results: response.data.results,
            total_pages: response.data.total_pages,
        };
    } catch (error) {
        console.error('Error fetching movies:', error);
        throw error;
    }
};