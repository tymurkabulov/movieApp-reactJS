import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layout/MainLayout";
import {GenrePage} from "./pages/GenrePage";
import {GenresPage} from "./pages/GenresPage";
import {MoviesPage} from "./pages/MoviesPage";
import {MovieListCardPage} from "./pages/MovieListCardPage";




const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={'movies'}/>},
            {
                path: 'movies', element: <MoviesPage/>
            },
            {
                path: 'movie/:id', element: <MovieListCardPage/>
            },
            {
                path: 'genres', element: <GenresPage/>
            },
            {
                path: 'genre/:genreId', element: <GenrePage/>
            },
            {
                path: 'search/:querySearch',element:<MoviesPage/>
            }
        ]
    }
]);

export {
    router
}