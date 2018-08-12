import React from 'react';
import {connect} from 'react-redux';

export function Speed(props){
  return (
    <div className='stat-bar'>{props.speed}</div>
  );
};

export const mapStateToProps = state => ({
  speed: state.drone.speed
});

export default connect(mapStateToProps)(Speed);