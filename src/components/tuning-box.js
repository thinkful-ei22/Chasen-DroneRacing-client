import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Speed from './speed';
import Acceleration from './acceleration';
import Turning from './turning';
import Weight from './weight';
import Drag from './drag';
import Durability from './durability';
import Handling from './handling';
import PointBalance from './point-balance';
import DroneBox from './drone-box';
import { speedInc, accelerationInc, turningInc, weightInc, dragInc, durabilityInc, handlingInc, fetchDroneUpdate } from '../actions/drone';

function Tuning(props){

  const fireAction = (action, stat , val) => {
    console.log('action fire');
    if (stat > 0 && stat < 100){
      props.dispatch(action(val));
    }else if(stat ===0 && val===1){
      props.dispatch(action(val));
    }else if(stat===100 && val===-1){
      props.dispatch(action(val));
    }
  }
  console.log(props.user);
  const {speed, acceleration, turning, weight, drag, durability, handling, pointBalance, user}= props;
  const arr = [
    {stat:speed, action:speedInc, component:<Speed />, span:'>>Speed/Thrust'},
    {stat:acceleration, action:accelerationInc, component:<Acceleration />, span:'>>Acceleration'},
    {stat:turning, action:turningInc, component:<Turning />, span:'>>turning'},
    {stat:weight, action:weightInc, component:<Weight />, span:'>>weight'},
    {stat:drag, action:dragInc, component:<Drag />, span:'>>drag'},
    {stat:durability, action:durabilityInc, component:<Durability />, span:'>>durability'},
    {stat:handling, action:handlingInc, component:<Handling />, span:'>>handling'}
  ];

  const tuningButtons = arr.map((button, i) => {
    return (
    <div key={i}>
      <button className='incbutton' onClick={()=>{fireAction(button.action, button.stat, 1)}}>+</button>
      {button.component}
      <button className='decbutton' onClick={()=>{fireAction(button.action, button.stat, -1)}}>-</button> 
      <span>{button.stat}{button.span}</span>
    </div>)
  })

 
  console.log(user);
  return (
    <div>
      <h1>DRONE RACING: TUNING</h1>
      <DroneBox />
      <div className='tuning-box'>
        <h2>Drone Stats</h2>
        <PointBalance />
        {tuningButtons}
      </div>
      <p className={props.pointBalance<0?'red':'hidden'}>Negative point balance not allowed, Please deduct points from one of your stats</p>
      <button 
        type='submit'
        disabled={props.pointBalance<0}
        onClick={e=>{
          e.preventDefault();
          props.dispatch(fetchDroneUpdate(speed, acceleration, turning, weight, drag, durability, handling, pointBalance, user))
      }}>
        {props.pointBalance<0
          ? 'Disabled: SAVE AND GO TO RACE!'
          : <Link to='/race/'>SAVE AND GO TO RACE!</Link>
        }
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
  pointBalance: state.drone.pointBalance,
  error: state.drone.error,
  tuningLoading: state.drone.tuningLoading
});

export default connect(mapStateToProps)(Tuning);