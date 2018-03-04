import { combineReducers } from 'redux';
import { content } from './content';

const reducers = combineReducers({
  content,
});

const rootReducer = (state, action) => {
  return reducers(state, action);
};

export default rootReducer;
