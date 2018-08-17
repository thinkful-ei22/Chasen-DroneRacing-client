import React from 'react';
import {connect} from 'react-redux';


export function DroneBox(props){
  return (
    <div className='drone-box'>
      <h3>2018 AAI RQ-7A BLACK HAWK</h3>
      <img src='https://static.thenounproject.com/png/396606-200.png' alt='A 2018 AAI RQ-7A BLACK HAWK drone' />
      <img src='https://img.clipartxtras.com/bbf1f6780d939e627ced83b18936b821_image-gallery-track-drawing-car-tracks-drawing_3400-2200.jpeg' className='racetrack' alt='Denver Speedway 100' />
    </div>
  );
};


export default connect()(DroneBox);