import React from 'react';

import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const toolbar = (props) => (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className={classes.Toolbar}>
        <Navbar.Brand href="#home">
            <div className={classes.Logo}>
                <Logo />
            </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
                <NavigationItems/>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default toolbar;