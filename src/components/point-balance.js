import React from 'react';
import {connect} from 'react-redux';

export function PointBalance(props){
  return (
    <div className='point-balance'>Point Balance {props.pointBalance}</div>
  );
};

export const mapStateToProps = state => ({
  pointBalance: state.pointBalance
});

export default connect(mapStateToProps)(PointBalance);