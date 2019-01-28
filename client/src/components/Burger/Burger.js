import React from 'react';
import { withRouter } from 'react-router-dom';

import classes from './Burger.module.css';
import Ingredient from './Ingredients/Ingredients';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(ingKey => {
            return [...Array(props.ingredients[ingKey])].map((_, i) => {
                return <Ingredient key={ingKey + i} type={ingKey} />
            });
        }) // We need to test for 0 elements so we "flatten" the array here
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []);

    // Since we flatten the array above we can now test for if there are no elements in it
    if(transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }

    return (
        <div className={classes.Burger}>
            <Ingredient type="bread-top" />
            {transformedIngredients}
            <Ingredient type="bread-bottom" />
        </div>
    );
};

// we use the withRouter HOC here to enable history and match props
export default withRouter(burger);