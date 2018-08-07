import React from 'react';
import {connect} from 'react-redux';
import Speed from './speed';
import Acceleration from './acceleration';
import Turning from './turning';
import Weight from './weight';
import Drag from './drag';
import Durability from './durability';
import Handling from './handling';
import PointBalance from './point-balance';
import DroneBox from './drone-box';

function Racing(props){
  return (
    <div>
      <h1>DRONE RACING: THE BIG RACE</h1>
      {/* <Feedback /> */}
      <DroneBox />
      <div className='tuning-box'>
        <h2>Drone Stats</h2>
        <PointBalance />
        <div>
          <Speed /> 
          <span>{props.speed}>>Speed/Thrust</span>
        </div>
        <div>
          <Acceleration />
          <span>{props.acceleration}>>Acceleration</span>
        </div>
        <div>
          <Turning />
          <span>{props.turning}>>Turning</span>
        </div>
        <div>
          <Weight />
          <span>{props.weight}>>Weight</span>
        </div>
        <div>
          <Drag />
          <span>{props.drag}>>Drag</span>
        </div>
        <div>
          <Durability />
          <span>{props.durability}>>Durability</span>
        </div>
        <div>
          <Handling />
          <span>{props.handling}>>Handling</span>
        </div>
      </div>
    </div>
  );
};

export const mapStateToProps = state => ({
  speed: state.speed,
  acceleration: state.acceleration,
  turning: state.turning,
  weight: state.weight,
  drag: state.drag,
  durability: state.durability,
  handling: state.handling,
  pointBalance: state.pointBalance
});

export default connect(mapStateToProps)(Racing);