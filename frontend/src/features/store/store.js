import { combineReducers, createStore } from 'redux';
import projectReducer from '../reducers/projectReducer';
import finDataReducer from '../reducers/finDataReducer';
import authReducer from '../reducers/authReducer';
import projectButtonReducer from '../reducers/projectButtonReducer';

const rootReducer = combineReducers({
  projects: projectReducer,
  finData: finDataReducer,
  auth: authReducer,
  projectCards: projectButtonReducer,
});

const store = createStore(rootReducer);

export default store;
