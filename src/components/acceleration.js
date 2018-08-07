import React from 'react';
import {connect} from 'react-redux';

export function Acceleration(props){
  return (
    <div className='stat-bar'>{props.acceleration}</div>
  );
};

export const mapStateToProps = state => ({
  acceleration: state.acceleration
});

export default connect(mapStateToProps)(Acceleration);