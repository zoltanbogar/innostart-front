import * as React from 'react';

import classes from './Search.module.css';
import {useState} from "react";

const Search = props => {
    const [inputValue, setInputValue] = useState<string>('');

    const inputChangeHandler = event => {
        setInputValue(event.target.value);
    }

    const inputKeypressHandler = event => {
        if (event.key === 'Enter') {
            props.changed('name', inputValue, 'like');
        }
    }

    return (
        <input
            className={classes.Search}
            type="text"
            placeholder="Keresés a termék nevében"
            value={inputValue}
            onChange={event => inputChangeHandler(event)}
            onKeyPress={event => inputKeypressHandler(event)}
        />
    )
}

export default Search;