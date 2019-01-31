import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';
import axios from '../../../axios-orders';

class ContactData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            ssoUserName: '',
            address: {
                street: '',
                postalCode: ''
            },
            loading: false
        }
    }

    // Because we use the render property in Checkout we get access to state
    // Had we just done a normal component={contactdata} then we would not have
    // gotten access to these props
    orderHandler = (event) => {
        event.preventDefault();
        this.setState({
            loading: true
        });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            customer: {
                name: 'Joshua Johnson',
                address: {
                    street: 'test street 1',
                    zipCode: '21771',
                    country: 'USA'
                },
                ssoUserName: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', order)
            .then(res => {
                this.setState({
                    loading: false,
                    purchasing: false
                })
            })
            .catch(err => {
                this.setState({
                    loading: false,
                    purchasing: false
                })
            })
    }

    render() {
        return (
            <div className = {classes.ContactData}>
                <h4>Enter your contact information here:</h4>
                <form>
                    <input className={classes.Input} type="text" name="name" placeholder="Your Name" />
                    <input className={classes.Input} type="email" name="email" placeholder="Your email" />
                    <input className={classes.Input} type="text" name="street" placeholder="Your street information" />
                    <input className={classes.Input} type="text" name="postal" placeholder="Your postal code" />
                    <Button
                        btnType="Success"
                        onClick={this.orderHandler}
                    >ORDER</Button>
                </form>
            </div>
        )
    }
}

export default ContactData;