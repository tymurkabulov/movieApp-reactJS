import React, { FC } from 'react';
import {IMovie} from "../../interfaces/IMovie";
import {PosterPreview} from "../PosterPreview/PosterPreview";
import StarsRating from "../StarsRating/StarsRating";
import './MovieListCard.css'


const MoviesListCard: FC<{ movie: IMovie }> = ({ movie }) => {
    return (
        <div className="list__card">
            <PosterPreview movie={movie} />
            <StarsRating vote_average={movie.vote_average} />
            <h3 className="list__card-title">{movie.original_title}</h3>
        </div>
    );
};

export default MoviesListCard;