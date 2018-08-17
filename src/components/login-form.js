import React from 'react';
import{reduxForm, Field, focus} from 'redux-form';
import Input from './input';
import {required, nonEmpty, isTrimmed} from '../validators';
import {login} from '../actions/auth';

export class LoginForm extends React.Component {
  onSubmit(values) {
      return this.props.dispatch(login(values.username, values.password));
  }

  render() {
      let error;
      if (this.props.error) {
          error = (
              <div className="form-error" aria-live="polite">
                  {this.props.error}
              </div>
          );
      }
      return (
          <form
              className="login-form"
              onSubmit={this.props.handleSubmit(values =>
                  this.onSubmit(values)
              )}>
              <legend>Please Login</legend>
              {error}
              <label htmlFor="username">Username</label>
              <Field
                  component={Input}
                  type="text"
                  name="username"
                  id="username"
                  validate={[required, nonEmpty, isTrimmed]}
              />
              <label htmlFor="password">Password</label>
              <Field
                  component={Input}
                  type="password"
                  name="password"
                  id="password"
                  validate={[required, nonEmpty, isTrimmed]}
              />
              <button disabled={this.props.pristine || this.props.submitting}>
                  Log in
              </button>
          </form>
      );
  }
}

export default reduxForm({
  form: 'login',
  onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);
