import React from 'react';

import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = ( props ) => (
    <header className={classes.Toolbar}>
        <div className={classes.Logo}>
            <Logo />
        </div>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <nav className={classes.DesktopOnly}>
            <NavigationItems isAuthenticated={props.isAuth} name={props.name} />
        </nav>
    </header>
);

export default toolbar;