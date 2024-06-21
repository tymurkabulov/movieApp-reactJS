import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';



const Header = () => {
    return (
        <header className="header">
            <div className="header__left">MoviesApp</div>
            <div className="header__right">
                <Link to="/movies">Movies</Link>
                <Link to="/genres">Genres</Link>
            </div>
        </header>
    );
};

export default Header;