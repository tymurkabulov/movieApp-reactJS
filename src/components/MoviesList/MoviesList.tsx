import React from 'react';
import { IMovie } from '../../interfaces/IMovie';
import './MoviesList.css';
import MoviesListCard from "../MovieListCard/MovieListCard";

interface MoviesListProps {
    movies: IMovie[];
}

const MoviesList: React.FC<MoviesListProps> = ({ movies }) => {
    return (
        <div className="list">
            {movies.map(movie => (
                <MoviesListCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
};

export default MoviesList;