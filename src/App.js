import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Tuning from './components/tuning-box';
import LoginPage from './components/login-page';
import Racing from './components/drone-racing';

export default function App(){
    return (
      <Router>
        <main>
          <Route exact path='/' component={LoginPage} />
          <Route exact path='/tuning' component={Tuning} />
          <Route exact path='/race' component= {Racing} />
        </main>
      </Router>
    );
}

