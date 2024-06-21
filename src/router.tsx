import { createBrowserRouter } from 'react-router-dom';
import {MainLayout} from "./layout/MainLayout";
import {GenresPage} from "./pages/GenresPage";
import MoviesPage from "./pages/MoviesPage";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { path: '/movies', element: <MoviesPage /> },
            { path: '/genres', element: <GenresPage /> },
        ],
    },
]);