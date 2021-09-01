import './App.css';
import React from 'react';
import Login from './components/authentication/login/Login';
import { Route, Switch } from 'react-router-dom';
import Signup from './components/authentication/signup/Signup';
import ForgotPassword from './components/authentication/forgotPassword/ForgotPassword';
import Dashboard from './components/dashboard/Dashboard';


function App() {
  return (

    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/forgotpassword" component={ForgotPassword} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>

  );
}

export default App;
