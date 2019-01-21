import React from 'react';

import classes from './Controller.module.css';

const controller = (props) => (
    <div className={classes.Controller}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Less} onClick={props.remove} disabled={props.disabled} >Less</button>
        <button className={classes.More} onClick={props.added} >Add</button>
    </div>
);

export default controller;