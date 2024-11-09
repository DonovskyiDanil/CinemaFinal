import React, { useEffect } from "react";
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import MovieList from './MovieList';
import MovieItem from './MovieItem';
import { useDispatch, useSelector } from "react-redux";
import { getAllMoviesAction } from "../../store/actions/movieActions";

function Movies() {
    const dispatch = useDispatch();
    const location = useLocation(); 
    const movies = useSelector((state) => state.moviesList.movies);

    useEffect(() => {
        dispatch(getAllMoviesAction());
    }, [dispatch]);

    return (
        <>
            <div>
                {location.pathname === '/movies' && (
                    <Link to='new' style={{ fontSize: '30px' }}>New</Link>
                )}
            </div>
            <Routes>
                <Route path=":id" element={<MovieItem movies={movies} />} />
                <Route path="/" element={<MovieList movies={movies} />} />
            </Routes>
        </>
    );
}

export default Movies;
