import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../assests/images/logo.png'

// import '../../../App.css';
import '../login/login.css'


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { username, password } = this.state
        if (username === "vishal" && password === "vishal123") {
            this.props.history.push('/dashboard')

        }
    }

    render() {
        return (
            <div className="splash-container">
                <div className="card">
                    <div className="card-header text-center">
                        <NavLink to="/">
                            <img className="logo-img" src={logo} alt="logo" />
                        </NavLink>
                        <span className="splash-description">Please enter your user information.</span>
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input
                                    className="form-control form-control-lg"
                                    name="username"
                                    type="text"
                                    value={this.state.username}
                                    placeholder="Username"
                                    autoComplete="off"
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    className="form-control form-control-lg"
                                    name="password"
                                    type="password"
                                    value={this.state.password}
                                    placeholder="Password"
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label className="custom-control custom-checkbox">
                                    <input
                                        className="custom-control-input"
                                        type="checkbox"
                                    />
                                    <span className="custom-control-label">Remember Me</span>
                                </label>
                            </div>
                            <button type="submit" className="btn btn-primary btn-lg btn-block">Sign in</button>
                        </form>
                    </div>
                    <div className="card-footer bg-white p-0  ">
                        <div className="card-footer-item card-footer-item-bordered">
                            <NavLink to="/signup" className="footer-link">Create An Account</NavLink></div>
                        <div className="card-footer-item card-footer-item-bordered">
                            <NavLink to="/forgotpassword" className="footer-link">Forgot Password</NavLink>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Login;
