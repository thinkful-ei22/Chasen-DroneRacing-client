import React from 'react';
import {connect} from 'react-redux';

export function Acceleration(props){
  return (
    <div className='stat-bar stat-bar-tuningpg'>{props.acceleration}</div>
  );
};

export const mapStateToProps = state => ({
  acceleration: state.drone.acceleration
});

export default connect(mapStateToProps)(Acceleration);