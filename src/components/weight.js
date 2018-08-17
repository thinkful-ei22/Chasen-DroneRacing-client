import React from 'react';
import {connect} from 'react-redux';

export function Weight(props){
  return (
    <div className='stat-bar stat-bar-tuningpg'>{props.weight}</div>
  );
};

export const mapStateToProps = state => ({
  weight: state.drone.weight
});

export default connect(mapStateToProps)(Weight);