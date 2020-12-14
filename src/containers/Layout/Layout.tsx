import React from 'react';

import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import classes from './Layout.module.css';

const layout = (props: { children: React.ReactNode; }) => {
    return (
        <Auxiliary>
            <Toolbar/>
            <main className={classes.Content}>
                {props.children}
            </main>
        </Auxiliary>
    );
}

export default layout;