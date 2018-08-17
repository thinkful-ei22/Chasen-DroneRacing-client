import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import LoginForm from './login-form';


export function LandingPage(props) {
    
    if (props.loggedIn){
        return <Redirect to="/race" />;
    }

    return (
        <div className='home'>
            <LoginForm />
            <Link to="/register" className='link'>Register</Link>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser
});

export default connect(mapStateToProps)(LandingPage);