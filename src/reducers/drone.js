import {START_RACE,SPEED_INC,ACCELERATION_INC,TURNING_INC, WEIGHT_INC,DRAG_INC,DURABILITY_INC,
  HANDLING_INC, TUNE_DRONE_REQUEST, TUNE_DRONE_SUCCESS, TUNE_DRONE_FAILURE, FIND_OPPONENT_FAILURE,
  FIND_OPPONENT_SUCCESS, FIND_OPPONENT_REQUEST} from '../actions/drone';
import {DRONE_SUCCESS} from '../actions/auth';

  const initialState={
    startRace: false,
    pointBalance: 0,
    speed: 80, 
    acceleration: 80,
    turning: 80,
    weight: 75,
    drag: 75,
    durability: 75,
    handling: 75,
    droneLevel: 75,
    user:{},
    opponent:{},
    tuneLoading: false,
    OppLoading: false,
    error: null
  }

  export default function droneReducer(state=initialState, action){
    // if(action.type === START_RACE){

    // }
    if (action.type === TUNE_DRONE_REQUEST){
      return Object.assign({}, state, {
        tuneLoading: true,
        error: null
      })
    }
    else if (action.type === FIND_OPPONENT_REQUEST){
      return Object.assign({}, state, {
        OppLoading: true,
        error: null
      })
    }
    else if (action.type === FIND_OPPONENT_SUCCESS){
      console.log(action.opponent);
      return Object.assign({}, state, {
        opponent: action.opponent,
        OppLoading: false,
        error: null
      })
    }
    else if (action.type === FIND_OPPONENT_FAILURE){
      return Object.assign({}, state, {
        OppLoading: false,
        error: action.error
      })
    }
    else if (action.type === DRONE_SUCCESS) {
      const {droneId} = action.currentUser
      return Object.assign({}, state, {
          user: action.currentUser,
          speed: droneId.speed,
          acceleration: droneId.acceleration,
          turning: droneId.turning,
          weight: droneId.weight,
          drag: droneId.drag,
          durability: droneId.durability,
          handling: droneId.handling
      });
    }
    else if (action.type === TUNE_DRONE_SUCCESS){
      return Object.assign({}, state, {
        tuneLoading: false
      })
    }
    else if (action.type === TUNE_DRONE_FAILURE){
      console.log(action);
      return Object.assign({}, state, {
        tuneLoading: false,
        error: action.error
      })
    }
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
    
    return state;

  }