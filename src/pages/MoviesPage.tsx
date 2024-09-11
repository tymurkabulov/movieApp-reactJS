import React from 'react';
import {Movies} from "../components/MoviesList/MoviesList";
import {Pagination} from "../components/Pagination/Pagination";




const MoviesPage = () => {
    return (
        <div>
            <Movies/>
            <Pagination/>
        </div>
    );
};

export {MoviesPage};