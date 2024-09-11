import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import styles from './SearchBox.module.css'
import {IMovie} from "../../interfaces";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../store";

const SearchBox = () => {

    const {page} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();
    const {register,handleSubmit,reset} = useForm<IMovie>();
    const navigate = useNavigate();

    const search:SubmitHandler<IMovie> = async(query) => {
        if (query.title.trim() === ''){
            navigate('/');
            await dispatch(movieActions.search({querySearch:query.title, page}))
        } else {
            await dispatch(movieActions.search({querySearch:query.title, page}))
            navigate(`/search/${query.title}`);
        }
        reset()
    };

    return (
        <form onSubmit={handleSubmit(search)} className={styles.form}>
            <input className={styles.input} type='text' placeholder={'search'} {...register('title')} />
            <button className={styles.button}>Search</button>
        </form>
    );
};

export {SearchBox};