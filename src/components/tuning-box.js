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
import PointBalance from './point-balance'
import { speedInc, accelerationInc, turningInc, weightInc, dragInc, durabilityInc, handlingInc } from '../actions/drone';

function Tuning(props){
  return (
    <div>
      <h1>DRONE RACING: TUNING</h1>
      <div className='tuning-box'>
        <h2>Drone Stats</h2>
        <PointBalance />
        <div>
          <button className='incbutton' onClick={()=>{props.dispatch(speedInc(1))}}>+</button><Speed /><button className='decbutton' onClick={()=>{props.dispatch(speedInc(-1))}}>-</button> 
          <span>{props.speed}>>Speed/Thrust</span>
        </div>
        <div>
          <button className='incbutton' onClick={()=>{props.dispatch(accelerationInc(1))}}>+</button><Acceleration /><button className='decbutton' onClick={()=>{props.dispatch(accelerationInc(-1))}}>-</button>
          <span>{props.acceleration}>>Acceleration</span>
        </div>
        <div>
          <button className='incbutton' onClick={()=>{props.dispatch(turningInc(1))}}>+</button><Turning /><button className='decbutton' onClick={()=>{props.dispatch(turningInc(-1))}}>-</button>
          <span>{props.turning}>>Turning</span>
          </div>
        <div>
          <button className='incbutton' onClick={()=>{props.dispatch(weightInc(1))}}>+</button><Weight /><button className='decbutton' onClick={()=>{props.dispatch(weightInc(-1))}}>-</button>
          <span>{props.weight}>>Weight</span>
          </div>
        <div>
          <button className='incbutton' onClick={()=>{props.dispatch(dragInc(1))}}>+</button><Drag /><button className='decbutton' onClick={()=>{props.dispatch(dragInc(-1))}}>-</button>
          <span>{props.drag}>>Drag</span>
          </div>
        <div>
          <button className='incbutton' onClick={()=>{props.dispatch(durabilityInc(1))}}>+</button><Durability /><button className='decbutton' onClick={()=>{props.dispatch(durabilityInc(-1))}}>-</button>
          <span>{props.durability}>>Durability</span>
          </div>
        <div>
          <button className='incbutton' onClick={()=>{props.dispatch(handlingInc(1))}}>+</button><Handling /><button className='decbutton' onClick={()=>{props.dispatch(handlingInc(-1))}}>-</button>
          <span>{props.handling}>>Handling</span>
        </div>
      </div>
      <button><Link to='/race/'>GO TO RACE</Link></button>
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

export default connect(mapStateToProps)(Tuning);