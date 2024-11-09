import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { getAllActorsAction } from '../../store/actions/actorActions';
import ActorItem from './ActorItem';
import ActorList from './ActorList';

function Actors() {
    const dispatch = useDispatch();
    const location = useLocation(); 
    const actors = useSelector((state) => state.actorsList.actors);

    useEffect(() => {
        dispatch(getAllActorsAction());
    }, [dispatch]);

    return (
        <>
            <div>
                {location.pathname === '/actors' && (
                    <Link to='new' style={{ fontSize: '30px' }}>New</Link>
                )}
            </div>
            <Routes>
                <Route path=':id' element={<ActorItem actors={actors} />} />
                <Route path='/' element={<ActorList actors={actors} />} />
            </Routes>
        </>
    );
}

export default Actors;
