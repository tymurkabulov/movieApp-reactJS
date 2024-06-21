import React, { useState } from 'react';
import Pagination from "../components/Pagination/Pagination";
import MoviesList from "../components/MoviesList/MoviesList";
import { useMovies } from "../hooks/useMovies";
import SearchBox from "../components/Searchbox/SearchBox";


const MoviesPage: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const { movies, totalPages, loading } = useMovies(currentPage, searchQuery);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handleSearch = (query: string) => {
        setSearchQuery(query);
        setCurrentPage(1); // Reset to first page when a new search is performed
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <SearchBox onSearch={handleSearch} />
            <MoviesList movies={movies} />
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
    );
};

export default MoviesPage;