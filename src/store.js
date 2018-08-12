import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import droneReducer from './reducers/drone';
import authReducer from './reducers/auth';
import protectedDataReducer from './reducers/protected-data';
import {reducer as formReducer} from 'redux-form'
// import { composeWithDevTools } from 'redux-devtools-extension';


export default createStore(
  
  combineReducers({
    drone:droneReducer, 
    form:formReducer, 
    auth:authReducer,
    protectedData: protectedDataReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
  
);

