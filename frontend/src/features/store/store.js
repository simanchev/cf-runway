import { combineReducers, createStore } from 'redux';
import projectReducer from '../project/projectReducer';

const rootReducer = combineReducers({
  projects: projectReducer,
});

const store = createStore(rootReducer);

export default store;
