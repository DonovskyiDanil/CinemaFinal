
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { deleteDirectorAction } from "../../store/actions/directorActions";

function DirectorList({directors}) {
    const dispatch = useDispatch();

    const onDelete = (id) => {
        dispatch(deleteDirectorAction(id)); 
    };

    return (
        <ul className='directors-container' style={{padding: 0, margin: 0}}>
                {directors.map((director) => (
                    <li key={director.id} style={{marginBottom: '8px', listStyle: 'none'}}>
                        <Stack
                            direction="row"
                            spacing={2} 
                            justifyContent='flex-start'
                            alignItems='center'>
                            <Link to={`${director.id}`} className='title-link'>
                                <p style={{fontSize: '30px', margin: 0}}>
                                    {director.fullName}</p>
                            </Link>
                            <Stack
                            direction='row'
                            spacing={1}
                            style={{marginLeft: 'auto'}}
                            alignItems='center'>
                            <Link to={`new/${director.id}`}>
                                <EditIcon />
                            </Link>
                            <DeleteIcon onClick={() => onDelete (director.id)}/>
                        </Stack>
                        </Stack>
                    </li>
                ))}
        </ul>
    );
}

export default DirectorList;
