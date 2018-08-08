import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import droneReducer from './reducers/drone';
import {reducer as formReducer} from 'redux-form'


export default createStore(
  combineReducers({drone:droneReducer, form:formReducer}), 
  applyMiddleware(thunk)
);

