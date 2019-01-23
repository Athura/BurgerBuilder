import React from 'react';

import classes from './SideDrawer.module.css';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';

const sideDrawer = (props) => {
    // conditionals for classes we want to attach
    return (
        <div className={classes.SideDrawer}>
            <Logo height="11%" />
            <nav>
                <NavItems />
            </nav>
        </div>
    );
};

export default sideDrawer;