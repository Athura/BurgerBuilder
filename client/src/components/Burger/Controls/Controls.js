import React from 'react';

import classes from './Controls.module.css';
import Controller from './Controller/Controller';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
];

const controllers = (props) => (
    <div className={classes.Controls}>
        {controls.map(ctrl => (
            <Controller key={ctrl.label} label={ctrl.label} />
        ))}
    </div>
)

export default controllers;