import {combineReducers} from 'redux';
import startReducer from './start/reducer';
import {key as startKey} from './start/actions';

/**
 * Example
 */
const appReducer = combineReducers({
  [startKey]: startReducer,
});

export default function rootReducer(state, action) {
  return appReducer(state, action);
}
