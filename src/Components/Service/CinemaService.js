import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MovieForm from '../Movies/MovieForm';
import ActorForm from '../Actors/ActorForm';
import DirectorForm from '../Directors/DirectorForm';
import StudioForm from '../Studios/StudioForm';

const styles = {
    textAlign: 'center',
    color: 'black',
};

function CinemaService() {
    return (
        <>
            <h1 style={styles}>CinemaService</h1>
            <Routes>
                <Route path='/movies/new' element={<MovieForm/>} />
                <Route path='/movies/new/:id' element={<MovieForm/>}/>
                <Route path='/actors/new' element={<ActorForm/>}/>
                <Route path='/actors/new/:id' element={<ActorForm/>} />
                <Route path='/directors/new' element={<DirectorForm/>}/>
                <Route path='/directors/new/:id' element={<DirectorForm/>}/>
                <Route path='/studios/new' element={<StudioForm/>}/>
                <Route path='/studios/new/:id' element={<StudioForm/>}/>
            </Routes>
        </>
    );
}

export default CinemaService;
