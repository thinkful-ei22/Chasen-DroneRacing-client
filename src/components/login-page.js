import React from 'react';

import LoginForm from './login-form';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

export function LoginSignup(props){

    if (props.loggedIn){
      return <Redirect to='/race' />;
    }
    return (
      <div>
        <h2>Please Login</h2>
        <LoginForm/>
        <Link to='/register'>Register</Link>
      </div>
    );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginSignup);