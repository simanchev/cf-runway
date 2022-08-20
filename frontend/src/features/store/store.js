import { combineReducers, createStore } from 'redux';
import projectReducer from '../project/reducers/projectReducer';
import finDataReducer from '../project/reducers/finDataReducer';

const rootReducer = combineReducers({
  projects: projectReducer,
  finData: finDataReducer,
});

const store = createStore(rootReducer);

export default store;
