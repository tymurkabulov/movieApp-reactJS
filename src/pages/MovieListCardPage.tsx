import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks";
import { movieActions } from "../store";
import { MovieListCard } from "../components/MovieListCard/MovieListCard";

const MovieListCardPage = () => {
    const { movie } = useAppSelector(state => state.movies);
    const { id } = useParams<{ id?: string }>();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (id !== undefined) {
            dispatch(movieActions.getById({ id: +id }));
        }
    }, [id, dispatch]);

    return (
        <div>
            {movie && <MovieListCard movie={movie} />}
        </div>
    );
};

export { MovieListCardPage };