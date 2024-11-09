import { useDispatch } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { deleteMovieAction } from '../../store/actions/movieActions';


function MovieList({ movies }) {
    const dispatch = useDispatch();

    const onDelete = (id) => {
        dispatch(deleteMovieAction(id));
    };

    return (
        <ul className='movies-container' style={{ padding: 0, margin: 0 }}>
            {movies.map((movie) => (
                <li key={movie.id} style={{ marginBottom: '8px', listStyle: 'none' }}>
                    <Stack 
                        direction='row'
                        spacing={2}  
                        justifyContent='flex-start'
                        alignItems='center'>
                        <Link to={`${movie.id}`} className='title-link'>
                            <p style={{ fontSize: '30px', margin: 0 }}>
                                {movie.title}</p>
                        </Link>
                        <Stack 
                            direction='row' 
                            spacing={1}  
                            style={{ marginLeft: 'auto' }} 
                            alignItems='center'>
                            <Link to={`new/${movie.id}`}>
                                <EditIcon />
                            </Link>
                            <DeleteIcon onClick={() => onDelete(movie.id)} />
                        </Stack>
                    </Stack>
                </li>
            ))}
        </ul>
    );
}

export default MovieList;


