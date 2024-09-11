import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks";
import { PosterPreview } from "../components/PosterPreview/PosterPreview";
import { genreActions } from "../store";
import { Pagination } from "../components/Pagination/Pagination";
import styles from './GenrePage.module.css';

const GenrePage = () => {
    const { genreId } = useParams<{ genreId?: string }>();
    const { moviesByGenre, page } = useAppSelector(state => state.genres);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (genreId !== undefined) {
            dispatch(genreActions.getByGenreId({ genreId: +genreId, page }));
        }
    }, [dispatch, genreId, page]);

    return (
        <div>
            {moviesByGenre && (
                <div className={styles.genreContainer}>
                    {moviesByGenre.map(movie => (
                        <PosterPreview movie={movie} key={movie.id} />
                    ))}
                </div>
            )}
            <Pagination />
        </div>
    );
};

export { GenrePage };