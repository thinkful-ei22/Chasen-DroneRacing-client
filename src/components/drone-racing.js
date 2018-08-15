import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Speed from './speed';
import Acceleration from './acceleration';
import Turning from './turning';
import Weight from './weight';
import Drag from './drag';
import Durability from './durability';
import Feedback from './feedback';
import Handling from './handling';
import PointBalance from './point-balance';
import DroneBox from './drone-box';
import {fetchOpponentDrone} from '../actions/drone';

function Racing(props){
  
  return (
    <div>
      <h1>DRONE RACING: THE BIG RACE</h1>
      <Feedback />
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
      <button><Link to='/tuning'>TUNING</Link></button>
      <button
        onClick={e=>{
          e.preventDefault();
          console.log(props.user);
          props.dispatch(fetchOpponentDrone(props.user.droneId.id))
        }}
      >
        RACE
      </button>
    </div>
  );
};

export const mapStateToProps = state => ({
  user: state.drone.user,
  speed: state.drone.speed,
  acceleration: state.drone.acceleration,
  turning: state.drone.turning,
  weight: state.drone.weight,
  drag: state.drone.drag,
  durability: state.drone.durability,
  handling: state.drone.handling,
  pointBalance: state.drone.pointBalance
});

export default connect(mapStateToProps)(Racing);