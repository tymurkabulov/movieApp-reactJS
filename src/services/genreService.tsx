import axios from 'axios';
import { api_key, baseURL } from '../constants/urls';
import { IGenre } from "../interfaces/IGenre";

export const getGenres = async (): Promise<{ genres: IGenre[] }> => {
    try {
        console.log('Sending request to API to get genres');
        const response = await axios.get(`${baseURL}/genre/movie/list`, {
            params: {
                api_key: api_key,
            },
        });
        console.log('API response:', response.data);

        if (!response.data.genres) {
            throw new Error('Genres not found in API response');
        }

        return {
            genres: response.data.genres,
        };
    } catch (error) {
        console.error('Error getting genres:', error);
        throw error;
    }
};