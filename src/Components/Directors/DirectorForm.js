import React from 'react';
import { ErrorMessage, FieldArray, Formik, Form, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { emptyDirector } from '../../constants';
import { createDirectorAction, updateDirectorAction } from '../../store/actions/directorActions';
import Stack from '@mui/material/Stack';
import * as Yup from 'yup';
import AppSelectElement from '../common/AppSelectElement';
import Button from '@mui/material/Button';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';
import ClearIcon from '@mui/icons-material/Clear';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import './DirectorForm.css';

function DirectorForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    
    const directors = useSelector((state) => state.directorsList.directors);
    const currentDirector = directors.find((director) => parseInt(director.id) === parseInt(id));

    const onDirectorSubmit = (values) => {
        if (!values.id) {
            dispatch(createDirectorAction({ ...values, id: Date.now() }));
        } else {
            dispatch(updateDirectorAction(values));
        }
        goHome();
    };

    const goHome = () => navigate('/directors');

    const schema = Yup.object().shape({
        fullName: Yup.string().required('Field is required'),
        birthYear: Yup.number()
            .min(1900, 'Birth year must be later than 1900')
            .max(new Date().getFullYear(), 'Birth year cannot be in the future')
            .required('Field is required'),
        nationality: Yup.string().required('Field is required'),
        image: Yup.string().url('Enter a valid URL').required('Field is required'),
        movies: Yup.array().of(Yup.string().required('Movie is required')).min(1, 'At least one movie is required'),
    });

    return (
        <Formik
            initialValues={currentDirector || emptyDirector}
            onSubmit={onDirectorSubmit}
            validationSchema={schema}
        >
            {({ resetForm, values, isValid }) => (
                <div className='director-form-container'>
                    <h1 className="director-form-title">Change Director Information</h1>
                    <Form>
                        <Stack spacing={2}>
                            <Stack direction='row' spacing={2}>
                                <label htmlFor='fullName' className="director-label">Full Name</label>
                                <Field name='fullName' id='fullName' type='text' className='director-form-field'/>
                            </Stack>
                            <ErrorMessage name='fullName'>
                                {(msg) => <div className="director-error">{msg}</div>}
                            </ErrorMessage>

                            <Stack direction="row" spacing={2}>
                                <label htmlFor="birthYear" className="director-label">Birth Year</label>
                                <Field name="birthYear" id="birthYear" component={AppSelectElement} className='director-form-field' />
                            </Stack>
                            <ErrorMessage name='birthYear'>
                                {(msg) => <div className="director-error">{msg}</div>}
                            </ErrorMessage>

                            <Stack direction="row" spacing={2}>
                                <label htmlFor="nationality" className="director-label">Nationality</label>
                                <Field name="nationality" id="nationality" component={AppSelectElement} className='director-form-field' />
                            </Stack>
                            <ErrorMessage name='nationality'>
                                {(msg) => <div className="director-error">{msg}</div>}
                            </ErrorMessage>

                            <fieldset className="director-items-container">
                                <legend className="director-legend">Movies</legend>
                                <FieldArray name='movies'>
                                    {({ push, remove }) => (
                                        <Stack spacing={2}>
                                            {values.movies.map((movie, index) => (
                                                <Stack key={index} direction='row' spacing={2}>
                                                    <Field
                                                        name={`movies[${index}]`}
                                                        id={`movie-${index}`}
                                                        type="text"
                                                        className="director-form-field"
                                                    />
                                                    {index > 0 && (
                                                        <Button
                                                            type='button'
                                                            variant='contained'
                                                            size='small'
                                                            startIcon={<RemoveIcon />}
                                                            onClick={() => remove(index)}
                                                        />
                                                    )}
                                                    <Button
                                                        type='button'
                                                        variant='contained'
                                                        size='small'
                                                        startIcon={<AddIcon />}
                                                        onClick={() => push('')}
                                                    />
                                                </Stack>
                                            ))}
                                        </Stack>
                                    )}
                                </FieldArray>
                            </fieldset>

                            <Stack direction='row' spacing={2}>
                                <label htmlFor='image' className="director-label">Photo</label>
                                <Field name="image" id="image" as="textarea" className="director-image-textarea" />
                            </Stack>
                            <ErrorMessage name='image'>
                                {(msg) => <div className="director-error">{msg}</div>}
                            </ErrorMessage>

                            {!isValid && (
                                <div className="director-error">
                                    Disable if non valid form
                                </div>
                            )}

                            <Stack direction="row" spacing={8} justifyContent="center">
                                <Button
                                    variant="contained"
                                    type="submit"
                                    disabled={!isValid}
                                    className="director-form-btn"
                                    size="large"
                                    startIcon={<SaveIcon />}
                                >
                                    Save
                                </Button>
                                <Button
                                    variant='contained'
                                    type='button'
                                    className='director-form-btn'
                                    onClick={goHome}
                                    size='large'
                                    startIcon={<KeyboardReturnIcon />}
                                >
                                    Return
                                </Button>
                                <Button
                                    variant='contained'
                                    type='reset'
                                    className='director-form-btn'
                                    onClick={() => resetForm({ values: emptyDirector })}
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

export default DirectorForm;
