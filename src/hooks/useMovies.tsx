import { useState, useEffect } from 'react';
import { IMovie } from '../interfaces/IMovie';
import { getMovies } from "../services/movies.api.services";

export const useMovies = (page: number = 1, searchQuery: string = '') => {
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const { results, total_pages } = await getMovies(page, searchQuery);
                setMovies(results);
                setTotalPages(total_pages);
            } catch (error) {
                setError('Error fetching movies');
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, [page, searchQuery]);

    return { movies, totalPages, loading, error };
};