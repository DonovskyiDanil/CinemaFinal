import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { getAllDirectorsAction } from '../../store/actions/directorActions';
import DirectorList from './DirectorList';
import DirectorItem from './DirectorItem';

function Directors() {

    const dispatch = useDispatch();
    const location = useLocation(); 
    const directors = useSelector((state) => state.directorsList.directors);

    useEffect(() => {
        dispatch(getAllDirectorsAction());
    }, [dispatch]);

    return (
        <>
            <div>
                {location.pathname === '/directors' && (
                    <Link to='new' style={{ fontSize: '30px' }}>New</Link>
                )}
            </div>
            <Routes>
                <Route path=':id' element={<DirectorItem directors={directors} />} />
                <Route path='/' element={<DirectorList directors={directors} />} />
            </Routes>
        </>
    );
}

export default Directors;
