import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import styles from './MoviesList.module.css'
import {PosterPreview} from "../PosterPreview/PosterPreview";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../store";

const Movies = () => {

    const {results, page} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();
    const {querySearch} = useParams();

    useEffect(() => {
        if (querySearch) {
            dispatch(movieActions.search({querySearch, page}))
        } else {
            dispatch(movieActions.getAll({page}))
        }
    }, [page, querySearch, dispatch]);


    return (
        <div className={styles.list} >
            {results.map(movie => <PosterPreview movie={movie} key={movie.id}/>)}
        </div>
    );
};

export {Movies};