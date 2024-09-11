import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import styles from './GenresList.module.css'
import {useAppDispatch, useAppSelector} from "../../hooks";
import {genreActions} from "../../store";

const Genres = () => {

    const {genres} = useAppSelector(state => state.genres);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();


    useEffect(() => {
        dispatch(genreActions.getAll())
    }, [dispatch]);

    return (
        <div className={styles.genresContainer}>
            <h1 className={styles.heading}>Choose your favorite genre</h1>
            <div className={styles.genres}>
                {genres.map(genre => <button className={styles.genres__el} key={genre.id} onClick={() => navigate(`/genre/${genre.id}`)}>{genre.name}</button>)}
            </div>
        </div>
    );
};

export {Genres};