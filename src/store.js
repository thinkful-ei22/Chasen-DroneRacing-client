import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import droneReducer from './reducers/drone';
import authReducer from './reducers/auth';
import protectedDataReducer from './reducers/protected-data';
import {reducer as formReducer} from 'redux-form'
import {loadAuthToken} from './local-storage';
import {setAuthToken, refreshAuthToken} from './actions/auth';

// import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(
  
  combineReducers({
    drone:droneReducer, 
    form:formReducer, 
    auth:authReducer,
    protectedData: protectedDataReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
  
);

// Hydrate the authToken from localStorage if it exist
const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());
}

export default store;
