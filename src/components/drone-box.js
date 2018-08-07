import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

export function DroneBox(props){
  return (
    <div>
      <h3>2018 AAI RQ-7A BLACK HAWK</h3>
      <img src='https://static.thenounproject.com/png/396606-200.png' alt='A 2018 AAI RQ-7A BLACK HAWK drone' />
      <button><Link to='/tuning'>TUNING</Link></button>
      <button>RACE</button>
    </div>
  );
};


export default connect()(DroneBox);