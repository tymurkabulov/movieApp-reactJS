import React, { FC } from 'react';
import StarRatings from 'react-star-ratings';
import './StarsRating.css'

interface StarsRatingProps {
    vote_average: number | undefined;
}

const StarsRating: FC<StarsRatingProps> = ({ vote_average }) => {
    if (typeof vote_average !== 'number' || isNaN(vote_average)) {
        return null;
    }

    const rating = (vote_average / 10) * 5;

    return (
        <StarRatings
            rating={rating}
            starRatedColor="yellow"
            numberOfStars={5}
            starDimension="20px"
            starSpacing="1px"
        />
    );
};

export default StarsRating;
