import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../../../assests/images/logo.png'

export default class ForgotPassword extends Component {
    render() {
        return (
            <div className="splash-container">
                <div className="card">
                    <div className="card-header text-center">
                        <img className="logo-img" src={logo} alt="logo" />
                        <span className="splash-description">Please enter your user information.</span></div>
                    <div className="card-body">
                        <form>
                            <p>Don't worry, we'll send you an email to reset your password.</p>
                            <div className="form-group">
                                <input className="form-control form-control-lg" type="email" name="email" required="" placeholder="Your Email" autoComplete="off" />
                            </div>
                            <div className="form-group pt-1">
                                <NavLink to="/"
                                    className="btn btn-block btn-primary btn-xl">Reset Password</NavLink>
                            </div>
                        </form>
                    </div>
                    <div className="card-footer text-center">
                        <span>Don't have an account? <NavLink to="/signup">Sign Up</NavLink></span>
                    </div>
                </div>
            </div>
        )
    }
}
