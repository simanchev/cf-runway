import { combineReducers, createStore } from 'redux';
import projectReducer from '../reducers/projectReducer';
import finDataReducer from '../reducers/finDataReducer';
import authReducer from '../reducers/authReducer';

const rootReducer = combineReducers({
  projects: projectReducer,
  finData: finDataReducer,
  auth: authReducer,
});

const store = createStore(rootReducer);

export default store;
