import React, { useEffect } from "react";
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import StudioList from './StudioList';
import StudioItem from './StudioItem';
import { useDispatch, useSelector } from "react-redux";
import { getAllStudiosAction } from "../../store/actions/studiosActions";

function Studios() {

    const dispatch = useDispatch();
    const location = useLocation(); 
    const studios = useSelector((state) => state.studiosList.studios);

    useEffect(() => {
        dispatch(getAllStudiosAction());
    }, [dispatch]);

    return (
        <>
            <div>
                {location.pathname === '/studios' && (
                    <Link to='new' style={{ fontSize: '30px' }}>New</Link>
                )}
            </div>
            <Routes>
                <Route path=':id' element={<StudioItem studios={studios} />} />
                <Route path='/' element={<StudioList studios={studios} />} />
            </Routes>
        </>
    );
}

export default Studios;
