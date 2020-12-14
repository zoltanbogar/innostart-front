import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const navigationItems = (props) => (
	<ul className={classes.NavigationItems}>
		<NavigationItem link="/" active>Főoldal</NavigationItem>
		<NavigationItem link="/second/">Másik oldal</NavigationItem>
	</ul>
);

export default navigationItems;