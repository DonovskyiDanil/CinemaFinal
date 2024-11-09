import { ErrorMessage, FieldArray, Formik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Field } from 'formik';
import { emptyActor } from '../../constants';
import { createActorAction, updateActorAction } from '../../store/actions/actorActions';
import Stack from '@mui/material/Stack';
import * as Yup from 'yup';
import AppSelectElement from '../common/AppSelectElement';
import Button from '@mui/material/Button';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';
import ClearIcon from '@mui/icons-material/Clear';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import './ActorForm.css';

function ActorForm() {
    const dispatch = useDispatch();
    const actors = useSelector((state) => state.actorsList.actors); 
    const { id } = useParams();
    const navigate = useNavigate();
    const currentActor = actors.find((actor) => parseInt(actor.id) === parseInt(id));

    const onActorSubmit = (values) => {
        if (currentActor) {
            dispatch(updateActorAction(values));
        } else {
            dispatch(createActorAction({ ...values, id: Date.now() }));
        }
        goHome();
    };

    const goHome = () => navigate('/actors');

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
            initialValues={currentActor || emptyActor}
            onSubmit={onActorSubmit}
            validationSchema={schema}
        >
            {({ values, isValid, resetForm }) => (
                <div className='actor-form-container'>
                    <Form>
                        <Stack spacing={2}>
                            <Stack direction="row" justifyContent="center">
                                <h1>Change Actor Information</h1>
                            </Stack>
                            <Stack direction='row' spacing={2}>
                                <legend htmlFor='fullName' className="actor-label actor-form-header">Full Name</legend>
                                <Field name='fullName' className="actor-form-field" />
                            </Stack>
                            <ErrorMessage name='fullName'>{(msg) => <div className="actor-error">{msg}</div>}</ErrorMessage>

                            <Stack direction='row' spacing={2}>
                                <legend htmlFor='birthYear' className="actor-label actor-form-header">Birth Year</legend>
                                <Field name='birthYear' component={AppSelectElement} className="actor-form-field" />
                            </Stack>
                            <ErrorMessage name='birthYear'>{(msg) => <div className="actor-error">{msg}</div>}</ErrorMessage>

                            <Stack direction="row" spacing={2}>
                                <legend htmlFor='nationality' className="actor-label actor-form-header">Nationality</legend>
                                <Field name="nationality" component={AppSelectElement} className="actor-form-field" />
                            </Stack>
                            <ErrorMessage name='nationality'>{(msg) => <div className="actor-error">{msg}</div>}</ErrorMessage>

                            <fieldset className="actor-items-container">
                                <legend className="actor-form-header">Movies</legend>
                                <FieldArray name='movies'>
                                    {({ push, remove }) => (
                                        <Stack spacing={2}>
                                            {values.movies.map((movie, index) => (
                                                <Stack key={index} direction='row' spacing={2}>
                                                    <Field name={`movies[${index}]`} className="actor-form-field" />
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
                                <legend htmlFor='image' className="actor-label actor-form-header">Photo</legend>
                                <Field name="image" as="textarea" className="actor-image-textarea actor-form-field" />
                            </Stack>
                            <ErrorMessage name='image'>{(msg) => <div className="actor-error">{msg}</div>}</ErrorMessage>
                            {!isValid && (
                                <div className="actor-error">
                                    Disable if non valid form
                                </div>
                            )}

                            <Stack direction="row" spacing={8} justifyContent="center">
                                <Button
                                    variant="contained"
                                    type="submit"
                                    disabled={!isValid}
                                    className="actor-form-btn"
                                    size="large"
                                    startIcon={<SaveIcon />}
                                >
                                    Save
                                </Button>
                                <Button
                                    variant='contained'
                                    type='button'
                                    className='actor-form-btn'
                                    onClick={goHome}
                                    size='large'
                                    startIcon={<KeyboardReturnIcon />}
                                >
                                    Return
                                </Button>
                                <Button
                                    variant='contained'
                                    type='reset'
                                    className='actor-form-btn'
                                    onClick={() => resetForm({ values: emptyActor })}
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

export default ActorForm;
