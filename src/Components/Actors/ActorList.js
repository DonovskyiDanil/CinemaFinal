import React from 'react';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from 'react-redux';
import { deleteActorAction } from '../../store/actions/actorActions';

function ActorList({actors}) {
    const dispatch = useDispatch();

    const onDelete = (id) => {
        dispatch(deleteActorAction(id));
    };

    return (
        <ul className='actors-container' style={{ padding: 0, margin: 0}}>
                {actors.map((actor) => (
                    <li key={actor.id} style={{marginBottom: '8px', listStyle: 'none'}}>
                        <Stack 
                            direction='row'
                            spacing={2} 
                            justifyContent='flex-start'
                            alignItems='center'>
                            <Link to={`${actor.id}`} className='title-link'>
                                <p style={{fontSize: '30px', margin: 0 }}>
                                    {actor.fullName}</p>
                            </Link>
                            <Stack 
                            direction='row'
                            spacing={1} 
                            style={{ marginLeft: 'auto'}}
                            alignItems='center'>
                            <Link to={`new/${actor.id}`}>
                                <EditIcon />
                            </Link>
                            <DeleteIcon onClick={() => onDelete(actor.id)}/>  
                            </Stack>
                        </Stack>
                    </li>
                ))}
            </ul>
    );
}

export default ActorList;
