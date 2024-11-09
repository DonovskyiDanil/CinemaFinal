import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';
import { Box } from '@mui/material'; 
import './App.css';
import Actors from './Components/Actors/Actors.js';
import Directors from './Components/Directors/Directors.js'; 
import HomePage from './Components/Home/HomePage.js'; 
import Layout from './Components/Studios/Layout.js';
import Movies from './Components/Movies/Movies.js';
import Studios from './Components/Studios/Studios';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllActorsAction } from './store/actions/actorActions.js';
import { getAllMoviesAction } from './store/actions/movieActions.js';
import { getAllDirectorsAction } from './store/actions/directorActions.js';
import { getAllStudiosAction } from './store/actions/studiosActions.js';

function App() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllActorsAction());
        dispatch(getAllMoviesAction());
        dispatch(getAllDirectorsAction());
        dispatch(getAllStudiosAction());
    }, [dispatch]);

    return (
        <Router>
            <Box 
                sx={{ 
                    width: '100vw', 
                    height: '100vh', 
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                <Routes>
                    <Route path="*" element={<Layout/>}>
                        <Route path="movies/*" element={<Movies />} />
                        <Route path="actors/*" element={<Actors />} />
                        <Route path="directors/*" element={<Directors />} />
                        <Route path="studios/*" element={<Studios />} />
                        <Route index element={<HomePage />} />
                        <Route path="*" element={<Navigate to="/movies" replace={true}/>} />
                    </Route>
                </Routes>
            </Box>
        </Router>
    );
}

export default App;
