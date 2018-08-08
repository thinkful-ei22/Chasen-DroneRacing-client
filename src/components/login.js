import React from 'react';
// import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import{reduxForm, Field} from 'redux-form';
// import{required, notEmpty, lengthOfFive} from '../validators/validators';
import Input from './input';
import {required, nonEmpty, isTrimmed} from '../validators';
import LoginSignup from './login-page';
import LoginSignupRequest from '../actions/login'

export function Login(props) {
  // onSubmit(values) {
  //   console.log(values);
  // }
    return (     
      <form 
        id="login-form" 
        className="login-form" 
  
      >
        <fieldset>
          <legend>Login</legend>
          <div>
            <label for="username">Username</label>
            <Field type="text" name="username" className="username-entry" component={Input} value validate={[required, nonEmpty,isTrimmed]} />
          </div>
          <div>
            <label for="password">Password</label>
            <Field type="password" name="password" className="password-entry" component={Input} value validate={[required, nonEmpty, isTrimmed]} />
          </div>
          <button type="submit">Login</button>
        </fieldset>
      </form>
    );
};


export default reduxForm({
  form: 'login'
})(Login);
