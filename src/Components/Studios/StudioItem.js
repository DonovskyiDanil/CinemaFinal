import React from 'react';
import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import './StudioItem.css';
import { emptyStudio } from "../../constants";

function StudioItem({ studios }) {
    const { id } = useParams();
    if (!studios || studios.length === 0) {
        return <p>Loading...</p>;
    }
    const studio = studios.find((studio) => parseInt(studio.id) === parseInt(id)) || emptyStudio;
    return (
        <Grid container className="studio-container">
            <Grid item lg={12} md={12} xl={12} sm={12} xs={12} className='studio-header'>
                <h1>{studio.title || 'No Name Available'}</h1>
            </Grid>
            <Grid item lg={6} md={6} xl={6} sm={6} xs={6}>
                <img src={studio.logo || 'default-logo.jpg'} alt={studio.title} className='poster'/>
            </Grid>
            <Grid item lg={6} md={6} xl={6} sm={6} xs={6} className="studio-description">
                <Stack>
                    <h2>Studio Information</h2>
                    <h3>Location</h3>
                    <h3>Founded</h3>
                </Stack>
            </Grid>
        </Grid>
    );
}

export default StudioItem;
