import * as React from 'react';

import classes from './Sorter.module.css';
import Option from './Option/Option';

const sorter = props => {
    return (
        <div className={classes.Sorter}>
            <div className={classes.Title}>{props.title}</div>
            <select className={classes.Select} name={props.name} id={props.id} size={props.options.length}>
                {props.options.map(option => {
                    return <Option value={option.value} key={option.value} column={option.column} operator={option.operator} changed={props.changed}>{option.caption}</Option>;
                })}
            </select>
        </div>
    )
}

export default sorter;