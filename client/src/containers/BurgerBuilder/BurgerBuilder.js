import React, { Component } from 'react';

import Burger from '../../components/Burger/Burger'
import Controllers from '../../components/Burger/Controls/Controls';

class BurgerBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0
            }
        }
    }

    render() {
        return (
            <>
                <Burger ingredients={this.state.ingredients} />
                <Controllers />
            </>
        );
    }
}

export default BurgerBuilder;