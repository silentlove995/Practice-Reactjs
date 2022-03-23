import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import "./style.css";
import classNames from 'classnames'
//import { Validator } from 'react';

class LoginPage extends Component {

    state = {
        data: {
            username: '',
            password: '',
        },
        errors: {},
        submiting: false
    }

    submit = (event) => {
        // verify
        let { data } = this.state
        let errors = {}
        if (!data.username) {
            errors.username = "Please enter username"
        } else {
            if (data.username.length < 4) {
                errors.username = "Username must have more than 3 characters"
            }
        }

        if (!data.password) {
            errors.password = "Please enter password"
        }

        console.log("errors: ", errors);
        this.setState({ errors })

        if (Object.keys(errors).length === 0) {
            //call api login and redirect to dashboard

            //redirect dashboard
            //submit data to server
            //console.log("submit ", this.state.data, " to server");
        }
        event.preventDefault();
    }

    onInPutChange = (event) => {
        this.setState({
            data: {
                ...this.state.data,
                [event.target.name]: event.target.value
            }
        })
    }

    render() {
        return (
            <form className="login-container">
                <h3 className='title'>Login</h3>
                <div className='field-wrapper'>
                    <div className="flex-container">
                        <label className='field-label' htmlFor="">User name</label>
                        <input className={classNames('field-input', { "error": this.state.errors.username })} name='username' type="text" onChange={this.onInPutChange} />
                    </div>
                    {/* { this.state.errors.username ? <span className='error-message'>{this.state.errors.username}</span> : '' } */}
                    {this.state.errors.username && <span className='error-message'>{this.state.errors.username}</span>}
                </div>
                <div className='field-wrapper'>
                    <div className="flex-container">
                        <label className='field-label' htmlFor="">Password</label>
                        <input className={classNames('field-input', { "error": this.state.errors.password })} name='password' type="password" onChange={this.onInPutChange} />
                    </div>
                    {this.state.errors.password && <span className='error-message'>{this.state.errors.password}</span>}
                </div><br />
                <div className='submit-wrapper'>
                    <input type="submit" className='btn-submit' onClick={this.submit} value="Login" />
                </div>
            </form>
        );
    }
}

export default LoginPage;