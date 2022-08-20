import { combineReducers, createStore } from 'redux';
import projectReducer from '../reducers/projectReducer';
import finDataReducer from '../reducers/finDataReducer';

const rootReducer = combineReducers({
  projects: projectReducer,
  finData: finDataReducer,
});

const store = createStore(rootReducer);

export default store;
