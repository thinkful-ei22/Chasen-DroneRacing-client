import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import droneReducer from './reducers/drone';


export default createStore(droneReducer, applyMiddleware(thunk));

