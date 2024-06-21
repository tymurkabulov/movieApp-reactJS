import React, { FC } from 'react';
import './StarsRating.css';

interface StarsRatingProps {
    vote_average: number | undefined;
}

const StarsRating: FC<StarsRatingProps> = ({ vote_average }) => {
    if (typeof vote_average !== 'number' || isNaN(vote_average)) {
        return null;
    }

    const starsTotal = 5;
    const starPercentage = (vote_average / 10) * 100;
    const starStyle = {
        width: `${starPercentage}%`
    };

    return (
        <div className="stars-outer">
            <div className="stars-inner" style={starStyle}></div>
        </div>
    );
};

export default StarsRating;