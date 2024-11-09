import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link, Outlet } from 'react-router-dom';
import AppHeader from '../Header/AppHeader';
import CinemaService from '../Service/CinemaService';
import AppFooter from '../Footer/AppFooter';
import './Layout.css'; 


function Layout() {
    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item lg={12} md={12} xl={12} sm={12} xs={12}>
                    <AppHeader />
                </Grid>
                <Grid item lg={2} md={2} xl={2} sm={2} xs={2} 
                sx={{ bgcolor: 'primary.light', }}
                > 
                    <ul>
                        <li className='menu-item'>
                            <Link to='/' className="link-item">Home</Link>
                        </li>
                        <li className='menu-item'>
                            <Link to='/movies' className="link-item">Movies</Link>
                        </li>
                        <li className='menu-item'>
                            <Link to='/actors' className="link-item">Actors</Link>
                        </li>
                        <li className='menu-item'>
                            <Link to='/directors' className="link-item">Directors</Link>
                        </li>
                        <li className='menu-item'>
                            <Link to='/studios' className="link-item">Studios</Link>
                        </li>
                    </ul>
                </Grid>
                <Grid item lg={5} md={5} xl={5} sm={5} xs={5} sx={{ bgcolor: 'aquamarine', minHeight: '500px' }}>
                    <main>
                        <Outlet />
                    </main>
                </Grid>
                <Grid item lg={5} md={5} xl={5} sm={5} xs={5} sx={{ bgcolor: 'primary.light'}}>
                    <CinemaService />
                </Grid>
                <Grid item lg={12} md={12} xl={12} sm={12} xs={12}
                sx={
                    {bgcolor: 'primary.dark',
                        color: 'white',
                        minHeight: '150px'}}>
                    <AppFooter/>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Layout;
