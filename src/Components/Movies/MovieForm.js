import React from 'react';
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import ClearIcon from '@mui/icons-material/Clear';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { createMovieAction, updateMovieAction } from '../../store/actions/movieActions';
import { emptyMovie } from '../../constants';
import './MovieForm.css';

function MovieForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const movies = useSelector((state) => state.moviesList.movies || []);
    const currentMovie = movies.find((movie) => parseInt(movie.id) === parseInt(id));

    const schema = Yup.object().shape({
        title: Yup.string().required('Title is required'),
        poster: Yup.string().required('Poster is required'),
        actors: Yup.array().of(Yup.string().required('Actor is required')),
        directors: Yup.array().of(Yup.string().required('Director is required')),
        studios: Yup.array().of(Yup.string().required('Studio is required')),
    });

    const goHome = () => navigate('/movies');

    const onMovieSubmit = (values) => {
        if (!values.id) {
            dispatch(createMovieAction({ ...values, id: Date.now() }));
        } else {
            dispatch(updateMovieAction(values));
        }
        goHome();
    };

    return (
        <Formik
            initialValues={currentMovie || emptyMovie}
            onSubmit={onMovieSubmit}
            validationSchema={schema}
        >
            {({ values, isValid, isSubmitting, resetForm }) => (
                <div className="form-container">
                    <Form id="form">
                        <Stack spacing={2}>
                            <Stack direction="row" alignItems="center" spacing={2}>
                                <legend htmlFor="title" className="legend">Title</legend>
                                <Field name="title" className="full-width" />
                            </Stack>
                            <ErrorMessage name="title" component="div" className="error" />
                            
                            <fieldset className="items-container">
                                <legend className="legend">Actors</legend>
                                <FieldArray name="actors">
                                    {({ push, remove }) => (
                                        <Stack spacing={2}>
                                            {values.actors.map((actor, index) => (
                                                <div className="stack-row" key={index}>
                                                    <Field
                                                        name={`actors[${index}]`}
                                                        className={index % 2 === 0 ? "short-input" : "long-input"}
                                                    />
                                                    {index > 0 && (
                                                        <Button
                                                            type="button"
                                                            variant="contained"
                                                            size="small"
                                                            startIcon={<RemoveIcon />}
                                                            onClick={() => remove(index)}
                                                        />
                                                    )}
                                                    <Button
                                                        variant="contained"
                                                        size="small"
                                                        type="button"
                                                        startIcon={<AddIcon />}
                                                        onClick={() => push('')}
                                                    />
                                                </div>
                                            ))}
                                        </Stack>
                                    )}
                                </FieldArray>
                                <ErrorMessage name="actors" component="div" className="error" />
                            </fieldset>
                            
                            <fieldset className="items-container">
                                <legend className="legend">Directors</legend>
                                <FieldArray name="directors">
                                    {({ push, remove }) => (
                                        <Stack spacing={2}>
                                            {values.directors.map((director, index) => (
                                                <div className="stack-row" key={index}>
                                                    <Field
                                                        name={`directors[${index}]`}
                                                        className={index % 2 === 0 ? "short-input" : "long-input"}
                                                    />
                                                    {index > 0 && (
                                                        <Button
                                                            type="button"
                                                            variant="contained"
                                                            size="small"
                                                            startIcon={<RemoveIcon />}
                                                            onClick={() => remove(index)}
                                                        />
                                                    )}
                                                    <Button
                                                        variant="contained"
                                                        size="small"
                                                        type="button"
                                                        startIcon={<AddIcon />}
                                                        onClick={() => push('')}
                                                    />
                                                </div>
                                            ))}
                                        </Stack>
                                    )}
                                </FieldArray>
                                <ErrorMessage name="directors" component="div" className="error" />
                            </fieldset>

                            <fieldset className="items-container">
                                <legend className="legend">Studios</legend>
                                <FieldArray name="studios">
                                    {({ push, remove }) => (
                                        <Stack spacing={2}>
                                            {values.studios.map((studio, index) => (
                                                <div className="stack-row" key={index}>
                                                    <Field
                                                        name={`studios[${index}]`}
                                                        className={index % 2 === 0 ? "short-input" : "long-input"}
                                                    />
                                                    {index > 0 && (
                                                        <Button
                                                            type="button"
                                                            variant="contained"
                                                            size="small"
                                                            startIcon={<RemoveIcon />}
                                                            onClick={() => remove(index)}
                                                        />
                                                    )}
                                                    <Button
                                                        variant="contained"
                                                        size="small"
                                                        type="button"
                                                        startIcon={<AddIcon />}
                                                        onClick={() => push('')}
                                                    />
                                                </div>
                                            ))}
                                        </Stack>
                                    )}
                                </FieldArray>
                                <ErrorMessage name="studios" component="div" className="error" />
                            </fieldset>

                            <Stack direction="row" alignItems="center" spacing={2}>
                                <legend htmlFor="poster" className="legend">Poster</legend>
                                <Field name="poster" as="textarea" className="full-width" />
                            </Stack>
                            <ErrorMessage name="poster" component="div" className="error" />

                            <Stack direction="column" alignItems="center" spacing={1}>
                            {!isValid && (
    <div className="error-message">
        Disable if non valid form
    </div>
)}
                                <Stack direction="row" spacing={8} justifyContent="center">
                                    <Button
                                        variant="contained"
                                        type="submit"
                                        disabled={!isValid || isSubmitting}
                                        size="large"
                                        startIcon={<SaveIcon />}
                                    >
                                        Save
                                    </Button>
                                    <Button
                                        variant="contained"
                                        type="button"
                                        onClick={goHome}
                                        size="large"
                                        startIcon={<KeyboardReturnIcon />}
                                    >
                                        Return
                                    </Button>
                                    <Button
                                        variant="contained"
                                        type="button"
                                        onClick={() => resetForm({ values: emptyMovie })}
                                        size="large"
                                        startIcon={<ClearIcon />}
                                    >
                                        Reset
                                    </Button>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Form>
                </div>
            )}
        </Formik>
    );
}

export default MovieForm;
