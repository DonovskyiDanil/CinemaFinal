import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import ClearIcon from '@mui/icons-material/Clear';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import './StudioForm.css';
import { createStudioAction, updateStudioAction } from '../../store/actions/studiosActions';
import { emptyStudio } from '../../constants';

function StudioForm() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const navigate = useNavigate();

    const studios = useSelector((state) => state.studiosList.studios || []);
    const currentStudio = studios.find((studio) => parseInt(studio.id) === parseInt(id));

    const schema = Yup.object().shape({
        title: Yup.string().required(''),
        logo: Yup.string().url('Enter a valid URL').required('Logo is required'),
        location: Yup.string().required('Location is required'),
        founded: Yup.number().min(1900, 'Founded year must be later than 1900').max(new Date().getFullYear(), 'Founded year cannot be in the future').required('Founded year is required'),
        notableFilms: Yup.string().required('Notable films are required'),
        awards: Yup.string(),
        typesOfProduction: Yup.string(),
        collaborations: Yup.string(),
    });

    const goHome = () => navigate('/studios');

    const onStudioSubmit = (values) => {
        !values.id 
            ? dispatch(createStudioAction({ ...values, id: Date.now() }))
            : dispatch(updateStudioAction(values));
        goHome();
    };

    return (
        <Formik
            initialValues={{ ...emptyStudio, ...currentStudio }} 
            onSubmit={onStudioSubmit}
            validationSchema={schema}
        >
            {({ isValid, resetForm }) => ( 
                <div className='form-container'>
                    <Form id='form'>
                        <Stack className='field-container'>
                            <Stack direction="row" justifyContent="center">
                                <h1>Change Studios Information</h1>
                            </Stack>
                            <Stack direction='row' spacing={2}>
                                <label htmlFor='title' className='label'>Name</label>
                                <Field id='title' name='title' className='line' />
                            </Stack>
                            <ErrorMessage name='title' component='div' className='error' />
                            
                            <Stack className='field-container' direction='row' spacing={2}>
                                <label htmlFor='logo' className='label'>Logo</label>
                                <Field id='logo' name='logo' as='textarea' className='image-textarea' />
                            </Stack>
                            <ErrorMessage name='logo' component='div' className='error' />
                            
                            <Stack className='field-container' direction='row' spacing={2}>
                                <label htmlFor='location' className='label'>Location</label>
                                <Field id='location' name='location' className='line' />
                            </Stack>
                            <ErrorMessage name='location' component='div' className='error' />
                            
                            <Stack className='field-container' direction='row' spacing={2}>
                                <label htmlFor='founded' className='label'>Founded</label>
                                <Field id='founded' name='founded' className='line' />
                            </Stack>
                            <ErrorMessage name='founded' component='div' className='error' />
                            
                            <Stack className='field-container' direction='row' spacing={2}>
                                <label htmlFor='notableFilms' className='label'>Notable Films</label>
                                <Field id='notableFilms' name='notableFilms' className='line' />
                            </Stack>
                            <ErrorMessage name='notableFilms' component='div' className='error' />
                            
                            <Stack className='field-container' direction='row' spacing={2}>
                                <label htmlFor='awards' className='label'>Awards</label>
                                <Field id='awards' name='awards' className='line' />
                            </Stack>
                            <ErrorMessage name='awards' component='div' className='error' />
                            
                            <Stack className='field-container' direction='row' spacing={2}>
                                <label htmlFor='typesOfProduction' className='label'>Types of Production</label>
                                <Field id='typesOfProduction' name='typesOfProduction' className='line' />
                            </Stack>
                            <ErrorMessage name='typesOfProduction' component='div' className='error' />
                            
                            <Stack className='field-container' direction='row' spacing={2}>
                                <label htmlFor='collaborations' className='label'>Collaborations</label>
                                <Field id='collaborations' name='collaborations' className='line' />
                            </Stack>
                            <ErrorMessage name='collaborations' component='div' className='error' />
                            {!isValid && (
    <div className="error-message">
        Disable if non valid form
    </div>
)}
                            <Stack direction='row' spacing={8} justifyContent='center'>
                                <Button
                                    variant='contained'
                                    type='submit'
                                    disabled={!isValid}
                                    className='form-btn'
                                    size='large'
                                    startIcon={<SaveIcon />}
                                >
                                    Save
                                </Button>
                                <Button
                                    variant='contained'
                                    type='button'
                                    className='form-btn'
                                    onClick={goHome}
                                    size='large'
                                    startIcon={<KeyboardReturnIcon />}
                                >
                                    Return
                                </Button>
                                <Button
                                    variant='contained'
                                    type='button' 
                                    className='form-btn'
                                    onClick={() => { resetForm({ values: emptyStudio }); }}  
                                    size='large'
                                    startIcon={<ClearIcon />}
                                >
                                    Reset
                                </Button>
                            </Stack>
                        </Stack>
                    </Form>
                </div>
            )}
        </Formik>
    );
}

export default StudioForm;
