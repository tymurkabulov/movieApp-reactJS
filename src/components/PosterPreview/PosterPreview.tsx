import React, {FC} from "react";
import {useNavigate} from "react-router-dom";
import styles from './PosterPreview.module.css'
import {IMovie} from "../../interfaces";
import StarsRating from "../StarsRating/StarsRating";



export const PosterPreview:FC<{movie:IMovie}> = ({movie}) => {
    const navigate = useNavigate();

    const {title,release_date, poster_path,id,vote_average} = movie;
    return (

            <div className={styles.card} onClick={()=>navigate(`/movie/${id}`)}>
                <img className={styles.poster} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title}/>
                    <StarsRating vote_average={movie.vote_average} />
                    <h3 className={styles.list__cardTitle}>{movie.original_title}</h3>
            </div>


    )









}