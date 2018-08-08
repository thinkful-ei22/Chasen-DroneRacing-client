import React from 'react';
// import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import{reduxForm, Field, SubmissionError, focus} from 'redux-form';
import Input from './input'
// import{required, notEmpty, lengthOfFive} from '../validators/validators';
import {required, nonEmpty, isTrimmed} from '../validators';
import { registerUser } from '../actions/login';
import {login} from '../actions/auth';

export class Signup extends React.Component{
  onSubmit(values) {
    const {username, password} = values;
    const user = {username, password};
    return this.props
        .dispatch(registerUser(user))
        .then(() => this.props.dispatch(login(username, password)));
}


  render() {
    // let successMessage;
    // if (this.props.submitSucceeded) {
    //     successMessage = (
    //         <div className="message message-success">
    //             Logggin IN!
    //         </div>
    //     );
    // }

    // let errorMessage;
    // if (this.props.error) {
    //     errorMessage = (
    //         <div className="message message-error">{this.props.error}</div>
    //     );
    // }
    return (
      <form 
        id="signup-form" 
        className="signup-form" 
        onSubmit={this.props.handleSubmit(values => 
          this.onSumbmit(values)
      )}>
        <fieldset>
          <legend>Signup</legend>
          <div>
            <label for="username">Username</label>
            <Field type="text" name="username" className="username-entry" component={Input} value validate={[required, nonEmpty, isTrimmed]}/>
          </div>
          <div>
            <label for="password">Password</label>
            <Field type="password" name="password" className="password-entry" component={Input} value validate={[required, nonEmpty, isTrimmed]} />
          </div>
          <button type="submit">Signup</button>
        </fieldset>
      </form>
    );
  }
}


export default reduxForm({
  form: 'signup',
  onSubmitFail: (errors, dispatch) =>
        dispatch(focus('signup', Object.keys(errors)[0]))
})(Signup);
