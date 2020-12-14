import React from 'react';

import {Link} from "react-router-dom";

import classes from './NavigationItem.module.css';

const navigationItem = (props) => (
    <li className={classes.NavigationItem}>
        <Link to={props.link}>{props.children}</Link>
    </li>
);

export default navigationItem;