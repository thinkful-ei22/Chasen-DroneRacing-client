import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import {Redirect, Link} from 'react-router-dom';


export class HeaderBar extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    };

    render() {
        
        let logOutButton;
        let title;
        if (this.props.loggedIn) {
            logOutButton = (
                <button 
                    onClick={() => {
                        this.logOut()
                }}>
                    <Link to='/'>
                        Log out
                    </Link>
                </button>
            );
        }
        if (!this.props.loggedIn){
            title = (
                <h1>Welcome To Drone Racing</h1>
            )
            return <Redirect to="/" />;
        }
        return (
            <div className="header-bar">
                {title}
                {logOutButton}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);
