import React from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { useParams } from 'react-router-dom';
import { emptyDirector } from '../../constants';
import './DirectorItem.css';

function DirectorItem({ directors }) {
    const { id } = useParams();
    
    console.log('Directors data:', directors); 
    console.log('URL parameter ID:', id);  
    
    const director = directors.find((item) => item.id.toString() === id) || emptyDirector;

    return (
        <Grid container className="director-container">
            <Grid item lg={12} md={12} xl={12} sm={12} xs={12}
                className='movie-header'
                sx={{ textAlign: 'center' }}>
                <h1>{director.fullName}</h1>
            </Grid>
            <Grid item lg={6} md={6} xl={6} sm={6} xs={6}>
                <img src={director.image} alt={director.fullName} className="director-img" />
            </Grid>
            <Grid item lg={6} md={6} xl={6} sm={6} xs={6} className="director-description">
                <Stack>
                    <h2>About Director</h2>
                    <h3>Full Name: {director.fullName}</h3>
                    <h3>Birth Year: {director.birthYear}</h3>
                    <h3>Nationality: {director.nationality}</h3>
                    <h3>Movies</h3>
                    {director.movies.map((movie, index) => (
                        <p key={index}>{movie}</p>
                    ))}
                </Stack>
            </Grid>
        </Grid>
    );
}

export default DirectorItem;
