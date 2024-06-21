import { useState, useEffect } from 'react';
import {IGenre} from "../interfaces/IGenre";
import {getGenres} from "../services/genres.api.services";


export const useGenres = () => {
    const [genres, setGenres] = useState<IGenre[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const { genres } = await getGenres();
                setGenres(genres);
            } catch (error) {
                setError('Error fetching genres');
            } finally {
                setLoading(false);
            }
        };

        fetchGenres();
    }, []);

    return { genres, loading, error };
};