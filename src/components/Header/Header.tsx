import React, { useEffect, useState} from 'react';
import { NavLink } from "react-router-dom";
import { SearchBox } from "../Searchbox/SearchBox";
import styles from './Header.module.css';

import ReactSwitch from "react-switch";



const Header = () => {

    const [theme, setTheme] = useState<string>(localStorage.getItem('theme') || 'dark');
    const [trig, setTrig] = useState<boolean>(false);

    const changeTrig = () => {
        setTrig(prevState => !prevState)
    }
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        changeTrig();
        localStorage.setItem('theme', newTheme);
    };


    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <header className={`${styles.header} ${theme === 'dark' ? styles.dark : styles.light}`}>
            <div className={styles.header__left}>
                <NavLink to={'movies'}>
                    <h2>MoviesApp</h2>
                </NavLink>
            </div>
            <div className={styles.header__center}>
                <SearchBox />
            </div>
            <div className={styles.header__right}>
                <NavLink to={'movies'}>Movies</NavLink>
                <NavLink to={'genres'}>Genres</NavLink>
                <ReactSwitch
                    checked={trig}
                    onChange={toggleTheme}
                    onColor="#86d3ff"
                    onHandleColor="#2693e6"
                    handleDiameter={30}
                    uncheckedIcon={false}
                    checkedIcon={false}
                    boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                    activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                    height={20}
                    width={48}
                    className="react-switch"
                    id="material-switch"
                />
                <img src={'https://img.icons8.com/?size=100&id=98957&format=png&color=000000'} alt={'user'} className={styles.userLogo}/>
            </div>
        </header>
    );
};

export { Header };