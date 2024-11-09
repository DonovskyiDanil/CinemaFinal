import { useSelector } from "react-redux";
import { nationalities } from "../../constants";
import { FormControl, Select, MenuItem } from "@mui/material";
import React from 'react';

function AppSelectElement({ field, form, meta }) {

    const movies = useSelector((state) => state.moviesList.movies);
    const actors = useSelector((state) => state.actorsList.actors);
    const directors = useSelector((state) => state.directorsList.directors);
    const studios = useSelector((state) => state.studiosList.studios);

    const createYearList = () => {
        const currentYear = new Date().getFullYear();
        return Array.from({ length: currentYear - 1900 + 1 }, (_, index) => 1900 + index);
    };

    const yearArray = createYearList();


    const setMenuItem = (array = []) => {
        return array.map((item) => (
            <MenuItem key={item.id || item} value={item.id || item}>
                {item.title || item}
            </MenuItem>
        ));
    };


    const chooseArray = () => {
        switch (field.name) {
            case 'birthYear':
                return setMenuItem(yearArray);
            case 'nationality':
                return setMenuItem(nationalities);
            case 'movies':
                return setMenuItem(movies); 
            case 'actors':
                return setMenuItem(actors);
            case 'directors':
                return setMenuItem(directors);
            case 'studios':
                return setMenuItem(studios);
            default:
                return null;
        }
    };

    const hasError = meta && meta.touched && Boolean(meta.error);

    return (
        <FormControl
            variant="outlined"
            sx={{
                width: '200px',
                backgroundColor: 'aquamarine',
                borderRadius: 1,
                padding: '1px',
            }}
            error={hasError}
        >
            <Select
                id={field.name}
                sx={{
                    minWidth: '400px',
                    height: '20px',
                    fontSize: '13px',
                    padding: '5px',
                    boxShadow: '0px 0px 0px 1px white',
                    backgroundColor: 'aquamarine',
                    borderRadius: '1',
                }}
                name={field.name}
                value={field.value || ''} 
                onChange={field.onChange}
                displayEmpty
            >
                <MenuItem value="">
                    <em>----</em>
                </MenuItem>
                {chooseArray()}
            </Select>
            {hasError && <div className="error">{meta.error}</div>}
        </FormControl>
    );
}

export default AppSelectElement;
