import React from 'react';
import {connect} from 'react-redux';

export function Handling(props){
  return (
    <div className='stat-bar'>{props.handling}</div>
  );
};

export const mapStateToProps = state => ({
  handling: state.handling
});

export default connect(mapStateToProps)(Handling);