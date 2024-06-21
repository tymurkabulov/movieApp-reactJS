import React, {FC} from 'react';
import {useGenres} from "../../hooks/useGenres";
import './GenresList.css'

const GenresList:FC = () => {
    const { genres, loading, error } = useGenres();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className='genres-container'>
            <h1 className='heading'>Choose your favorite genre</h1>
            <div className='genres'>
                {genres.map(genre => (
                    <li key={genre.id} className='genres__el'>{genre.name}</li>
                ))}
            </div>
        </div>
    );
};

export default GenresList;