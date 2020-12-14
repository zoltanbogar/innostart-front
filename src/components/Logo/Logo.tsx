import React from 'react';

import LogoImage from "../../assets/images/logo.jpg";
import classes from './Logo.module.css';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={LogoImage} alt="TestLogo" />
    </div>
);

export default logo;