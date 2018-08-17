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
    <div className='drone-racing'>
      <h1>DRONE RACING: THE BIG RACE</h1>
      <DroneBox />
      <Feedback />
      <div className='tuning-box'>
        <div className='stats-title-box'>
          <h3 className='stats-title'>Drone Level: 1</h3>
          <PointBalance />
        </div>
        <div className='stat-box'>
          <div className='drone-stats'>
            <Speed /> 
            <span className='racing-span'>{props.speed} >> Speed</span>
          </div>
          <div className='drone-stats'>
            <Acceleration />
            <span className='racing-span'>{props.acceleration} >> Acceleration</span>
          </div>
          <div className='drone-stats'>
            <Turning />
            <span className='racing-span'>{props.turning} >> Turning</span>
          </div>
          <div className='drone-stats'>
            <Weight />
            <span className='racing-span'>{props.weight} >> Weight</span>
          </div>
          <div className='drone-stats'>
            <Drag />
            <span className='racing-span'>{props.drag} >> Drag</span>
          </div>
          <div className='drone-stats'>
            <Durability />
            <span className='racing-span'>{props.durability} >> Durability</span>
          </div>
          <div className='drone-stats'>
            <Handling />
            <span className='racing-span'>{props.handling} >> Handling</span>
          </div>
        </div>
      </div>
      <button className='racing-btn'><Link to='/tuning'>TUNING</Link></button>
      <button
        className='racing-btn'
        onClick={e=>{
          e.preventDefault();
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