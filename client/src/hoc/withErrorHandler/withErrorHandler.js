import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = ( WrappedComponent, axios ) => {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                error: null
            }
        }

        componentWillMount() {
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({
                    error: null
                })
                return req;
            })
            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({
                    error: error
                })
            })
        }

        // We eject the interceptors here because when the current component gets
        // unmounted we don't want the above interceptors to still be mounted. That will cause a memory leak
        componentWillUnmount = () => {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }


        errorConfirmHandler = () => {
            this.setState({
                error: null
            })
        }

        render () {
            return (
                <>
                    <Modal show={this.state.error} modalClose={this.errorConfirmHandler} >
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </>
            )
        }
    }
}

export default withErrorHandler;