import React from 'react';
import { Field, FieldArray, ErrorMessage } from 'formik';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const CreateMovieField = ({ name, label, options = [] }) => (
    <fieldset className='items-container'>
        <legend>{label}</legend>
        <FieldArray name={name}>
            {({ push, remove, form: { values } }) => (
                <Stack spacing={2}>
                    {(values[name] || []).map((item, index) => (
                        <Stack key={index} direction='row' spacing={2}>
                            <Field name={`${name}[${index}]`} as='select'>
                                <option value="" label="Select option" />
                                {options.map(option => (
                                    <option key={option.id} value={option.fullName}>{option.fullName}</option>
                                ))}
                            </Field>
                            <ErrorMessage name={`${name}[${index}]`} component="div" className="error" />
                            {index > 0 && (
                                <Button
                                    type='button'
                                    variant='contained'
                                    size='small'
                                    startIcon={<RemoveIcon />}
                                    onClick={() => remove(index)}
                                />
                            )}
                            {index === (values[name] || []).length - 1 && (
                                <Button
                                    variant='contained'
                                    size='small'
                                    type='button'
                                    startIcon={<AddIcon />}
                                    onClick={() => push('')}
                                />
                            )}
                        </Stack>
                    ))}
                </Stack>
            )}
        </FieldArray>
    </fieldset>
);


export default CreateMovieField;
