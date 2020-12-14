import * as React from 'react';

import classes from './Filter.module.css';

import Button from '../../../UI/Button/Button';

const filter = props => {
    return (
        <div className={classes.Filter}>
            <Button btnType={'Filter'} clicked={props.clicked}>{props.caption}</Button>
        </div>
    )
}

export default filter;