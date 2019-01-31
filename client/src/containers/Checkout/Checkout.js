import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: null,
            price: 0
        };
    }

    componentDidMount() {
        // we use this to consume the query string we created in BurgerBuilder
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;
        for (let param of query.entries()) {
            // ['salad', '1']
            if (param[0] === 'price') {
                price = param[1];
            } else {
                ingredients[param[0]] = +param[1]
            }

        }
        this.setState({
            ingredients: ingredients,
            totalPrice: price
        })
    }

    checkoutCancelHandler = () => {
        // This function takes you back to the last page you we're on
        this.props.history.goBack();
    }

    checkoutContinueHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    onCheckoutCancel={this.checkoutCancelHandler}
                    onCheckoutContinue={this.checkoutContinueHandler}
                />
                <Route
                    path={this.props.match.path + '/contact-data'}
                    render={() => (<ContactData
                        ingredients={this.state.ingredients}
                        price={this.state.totalPrice} />)} />
            </div>
        )
    }
}

export default Checkout;