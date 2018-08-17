import React from 'react';
import {connect} from 'react-redux';

export function Turning(props){
  return (
    <div className='stat-bar stat-bar-tuningpg'>{props.turning}</div>
  );
};

export const mapStateToProps = state => ({
  turning: state.drone.turning
});

export default connect(mapStateToProps)(Turning);