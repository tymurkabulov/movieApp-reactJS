import React, { useEffect } from 'react';
import { useParams, useSearchParams } from "react-router-dom";
import { useAppDispatch } from "../../hooks";
import { genreActions, movieActions } from "../../store";
import styles from './Pagination.module.css';

const Pagination = () => {
    const dispatch = useAppDispatch();
    const { genreId, querySearch } = useParams();
    const [query, setQuery] = useSearchParams({ page: '1' });
    const pageNum = query.get('page') ?? '1'; // Используем '1' как значение по умолчанию, если pageNum равно null

    useEffect(() => {
        if (genreId) {
            dispatch(genreActions.getByGenreId({ genreId: +genreId, page: +pageNum }))
        } else if (querySearch) {
            dispatch(movieActions.search({ querySearch, page: +pageNum }))
        } else {
            dispatch(movieActions.getAll({ page: +pageNum }))
        }
    }, [pageNum, genreId, querySearch, dispatch]);

    const prevHandler = () => {
        setQuery(prev => {
            const currentPage = prev.get('page');
            if (currentPage !== null) {
                prev.set('page', `${+currentPage - 1}`);
            }
            return prev;
        });
    };

    const nextHandler = () => {
        setQuery(prev => {
            const currentPage = prev.get('page');
            if (currentPage !== null) {
                prev.set('page', `${+currentPage + 1}`);
            }
            return prev;
        });
    };

    return (
        <div className={styles.pagination}>
            <button className={styles.Button} disabled={+pageNum <= 1} onClick={prevHandler}>prev</button>
            <button className={styles.Button} disabled={+pageNum >= 500} onClick={nextHandler}>next</button>
        </div>
    );
};

export { Pagination };