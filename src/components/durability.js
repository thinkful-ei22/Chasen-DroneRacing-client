import React from 'react';
import {connect} from 'react-redux';

export function Durability(props){
  return (
    <div className='stat-bar'>{props.durability}</div>
  );
};

export const mapStateToProps = state => ({
  durability: state.durability
});

export default connect(mapStateToProps)(Durability);