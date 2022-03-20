import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./style.css";

class LoginPage extends Component {

    state = {
        data: {
            username: '',
            password: '',
        },
        errors: {},
        submiting: false,
    }

    submit = (event) => {
        // verify
        let { data } = this.state
        let errors = {}
        if (!data.username) {
            errors.username = "Please input username"
        }else{
            if (data.username.length < 3) {
                errors.username = "Username must have more than 3 characters"
            }
        }

        if (!data.password) {
            errors.password = "Please input password"
        }

        console.log("errors: ", errors);

        //submit data to server
        console.log("submit ", this.state.data, " to server");
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
                <div className='field-wrapper flex-container'>
                    <div>
                        <label className='field-label' htmlFor="">User name</label>
                        <input className='field-input' name='username' type="text" onChange={this.onInPutChange} />
                    </div>
                    <span>{this.state.errors.username</span>
                </div>
                <div className='field-wrapper flex-container'>
                    <label className='field-label' htmlFor="">Password</label>
                    <input className='field-input' name='password' type="password" onChange={this.onInPutChange} />
                </div><br />
                <div className='submit-wrapper'>
                    <input type="submit" className='btn-submit' onClick={this.submit} value="Login" />
                </div>
            </form>
        );
    }
}

export default LoginPage;