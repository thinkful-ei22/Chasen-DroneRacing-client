import React from 'react';
import {connect} from 'react-redux';

export function Drag(props){
  return (
    <div className='stat-bar'>{props.drag}</div>
  );
};

export const mapStateToProps = state => ({
  drag: state.drone.drag
});

export default connect(mapStateToProps)(Drag);