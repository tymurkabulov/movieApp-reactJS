import {FC} from 'react';
import {useNavigate} from "react-router-dom";
import styles from './MovieListCard.module.css'
import {IGenre, IMovie, IMovieCompanies} from "../../interfaces";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {urls} from "../../constants/urls";
import {genreActions} from "../../store";

interface IProps {
    movie: IMovie
}

const MovieListCard: FC<IProps> = ({movie}) => {

    const {original_title,backdrop_path,adult,budget,original_language,release_date,runtime,status,overview,tagline,genres,production_companies} = movie;
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {page} = useAppSelector(state => state.genres);

    return (
        <div className={styles.mainContainer}>
            <h1>{original_title}</h1>
            <div className={styles.movieInfo}>
                <div className={styles.posterBox}>
                    <img className={styles.poster} src={urls.poster + backdrop_path} alt={original_title}/>
                </div>
                <div>
                    <h4>Age restriction:{adult ? ' 18+' : ' 4+'}</h4>
                    <h4>Budget: {budget ? `$${budget}` : 'without budget'}</h4>
                    <h4>Original language: {original_language}</h4>
                    <h4>Release date: {release_date}</h4>
                    <h4>Runtime: {runtime} mins</h4>
                    <h4>Status: {status}</h4>
                    <p> Description: {overview}</p>
                    <h4>Tagline: {tagline ? `"${tagline}"` : 'without tagline'}</h4>
                    <div className={styles.genresBox}>
                        {genres.map((genre: IGenre) => <button key={genre.id} className={styles.Button} onClick={() => {
                            dispatch(genreActions.getByGenreId({genreId: +genre.id, page}))
                            navigate(`/genre/${genre.id}`)
                        }}>{genre.name}</button>)}
                    </div>
                    <div className={styles.companies}>
                        {production_companies.map((company: IMovieCompanies) =>
                            <div key={company.id}>
                                <img className={styles.logo} src={urls.poster + company.logo_path} alt={company.name}/>
                            </div>
                        )}
                    </div>
                </div>

            </div>
            <button className={styles.backButton} onClick={()=>window.history.back()}>Back</button>
        </div>
    );
};

export {MovieListCard};