import React from 'react';
import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import './MovieItem.css';
import { emptyMovie } from "../../constants";

function MovieItem({ movies }) {
    const { id } = useParams();

    if (!movies || movies.length === 0) {
        return <p>Loading...</p>;
    }

    const film = movies.find((movie) => parseInt(movie.id) === parseInt(id));
    const movie = film || emptyMovie;

    console.log('Selected Movie:', movie);

    return (
<Grid container className="movie-container">
    <Grid item xs={12}>
    </Grid>
    <Grid item lg={12} md={12} xl={12} sm={12} xs={12} className='movie-header'>
        <h1>{movie.title || 'No Title Available'}</h1>
    </Grid>
    <Grid item lg={6} md={6} xl={6} sm={6} xs={6}>
        <img src={movie.poster || 'default-poster.jpg'} alt={movie.title} className='poster'/>
    </Grid>
    <Grid item lg={6} md={6} xl={6} sm={6} xs={6} className="movie-description">
        <Stack>
            <h2>Movie Definition</h2>
            <h3>Stars</h3>
            {movie.actors && movie.actors.length > 0 ? (
                movie.actors.map((actor, index) => (
                    <p key={index}>{actor}</p>
                ))
            ) : (
                <p>No actors available</p>
            )}
            <h3>Directors</h3>
            {movie.directors && movie.directors.length > 0 ? (
                movie.directors.map((director, index) => (
                    <p key={index}>{director}</p>
                ))
            ) : (
                <p>No directors available</p>
            )}
            <h3>Studios</h3>
            {movie.studios && movie.studios.length > 0 ? (
                movie.studios.map((studio, index) => (
                    <p key={index}>{studio}</p>
                ))
            ) : (
                <p>No studios available</p>
            )}
        </Stack>
    </Grid>
</Grid>

    );
}

export default MovieItem;
