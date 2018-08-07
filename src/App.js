import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Tuning from './components/tuning-box';
import Login from './components/login';
import Racing from './components/drone-racing';

export default function App(){
    return (
      <Router>
        <main>
          <Route exact path='/' component={Login} />
          <Route exact path='/tuning' component={Tuning} />
          <Route exact path='/race' component= {Racing} />
        </main>
      </Router>
    );
}

