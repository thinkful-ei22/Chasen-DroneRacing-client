import {START_RACE,SPEED_INC,ACCELERATION_INC,TURNING_INC, WEIGHT_INC,DRAG_INC,DURABILITY_INC,HANDLING_INC} from '../actions/drone';

  const initialState={
    startRace: false,
    pointBalance: 0,
    speed: 75, 
    acceleration: 75,
    turning: 75,
    weight: 75,
    drag: 75,
    durability: 75,
    handling: 75,
    droneLevel: 75,
    user:{},
    opponent:{}
  }

  export default function droneReducer(state=initialState, action){
    if(action.type === START_RACE){}
    
    else if(action.type ===SPEED_INC){
      return Object.assign({},state, {speed: state.speed+action.increment, pointBalance: state.pointBalance-action.increment})
    }
    else if(action.type ===ACCELERATION_INC){
      return Object.assign({},state, {acceleration: state.acceleration+action.increment, pointBalance: state.pointBalance-action.increment})
    }
    else if(action.type ===TURNING_INC){
      return Object.assign({},state, {turning: state.turning+action.increment, pointBalance: state.pointBalance-action.increment})
    }
    else if(action.type ===WEIGHT_INC){
      return Object.assign({},state, {weight: state.weight+action.increment, pointBalance: state.pointBalance-action.increment})
    }
    else if(action.type ===DRAG_INC){
      return Object.assign({},state, {drag: state.drag+action.increment, pointBalance: state.pointBalance-action.increment})
    }
    else if(action.type ===DURABILITY_INC){
      return Object.assign({},state, {durability: state.durability+action.increment, pointBalance: state.pointBalance-action.increment})
    }
    else if(action.type ===HANDLING_INC){
      return Object.assign({},state, {handling: state.handling+action.increment, pointBalance: state.pointBalance-action.increment})
    }
    // else if(action.type ===POINT_BALANCE){}
    // else if(action.type ===SPEED_DEC){}
    // else if(action.type ===ACCELERATION_DEC){}
    // else if(action.type ===TURNING_DEC){}
    // else if(action.type ===WEIGHT_DEC){}
    // else if(action.type ===DRAG_DEC){}
    // else if(action.type ===DURABILITY_DEC){}
    // else if(action.type ===HANDLING_DEC){}
    return state;

  }