import React, {FC} from "react";
import {IMovie} from "../../interfaces/IMovie";



export const PosterPreview:FC<{movie:IMovie}> = ({movie}) => {
    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title}
                 className="poster"/>
        </div>

    )
}