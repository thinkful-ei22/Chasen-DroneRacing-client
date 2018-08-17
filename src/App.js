import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Tuning from './components/tuning-box';

import Racing from './components/drone-racing';
import {connect} from 'react-redux';


import LandingPage from './components/landing-page';
import HeaderBar from './components/header-bar';
import RegistrationPage from './components/registration-page';
import {refreshAuthToken} from './actions/auth';

export class App extends React.Component{
  componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
      // When we are logged in, refresh the auth token periodically
      this.startPeriodicRefresh();
    } else if (prevProps.loggedIn && !this.props.loggedIn) {
      // Stop refreshing when we log out
      this.stopPeriodicRefresh();
    }
  }

  componentWillUnmount() {
    this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
        () => this.props.dispatch(refreshAuthToken()),
        60 * 60 * 1000 // One hour
    );
  }

  stopPeriodicRefresh() {
    if (!this.refreshInterval) {
        return;
    }

    clearInterval(this.refreshInterval);
  }

  render(){
    return (
      <Router>
        <div className='app'>
          <HeaderBar />
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/tuning' component={Tuning} />
          <Route exact path='/race' component= {Racing} />
          <Route exact path='/register' component={RegistrationPage} />
        </div>
      </Router>
    );
  }
    
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default connect(mapStateToProps)(App);


