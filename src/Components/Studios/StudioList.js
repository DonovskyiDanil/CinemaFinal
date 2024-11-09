import React from 'react';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from 'react-redux';
import { deleteStudioAction } from '../../store/actions/studiosActions';

function StudioList({ studios }) {
    const dispatch = useDispatch();

    const onDelete = (id) => {
        dispatch(deleteStudioAction(id));
    };

    return (
        <ul className='studios-container' style={{padding: 0, margin: 0}}>
                {studios.map((studio) => (
                    <li key={studio.id} style={{marginBottom: '8px', listStyle: 'none'}}>
                        <Stack 
                            direction='row'
                            spacing={2}
                            justifyContent='flex-start'
                            alignItems='center'>
                            <Link to={`${studio.id}`} className='title-link'>
                                <p style={{fontSize: '30px', margin: 0}}>
                                    {studio.title}</p>
                            </Link>
                            <Stack
                            direction='row'
                            spacing={1}
                            style={{marginLeft: 'auto'}}
                            alignItems='center'>
                            <Link to={`new/${studio.id}`}>
                                <EditIcon />
                            </Link>
                            <DeleteIcon onClick={() => onDelete(studio.id)}/>
                        </Stack>
                        </Stack>
                    </li>
                ))}
        </ul>
    );
}

export default StudioList;
