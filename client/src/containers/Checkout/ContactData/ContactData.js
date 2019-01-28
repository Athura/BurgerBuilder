import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';

class ContactData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            ssoUserName: '',
            address: {
                street: '',
                postalCode: ''
            }
        }
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
                    >ORDER</Button>
                </form>
            </div>
        )
    }
}

export default ContactData;