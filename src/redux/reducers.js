import { combineReducers } from 'redux';
import fruitReducer from './modules/fruit.js';
export default combineReducers({
  produce: fruitReducer
});
