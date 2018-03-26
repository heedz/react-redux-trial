import { combineReducers } from "redux";
import { currentTime } from './time';
import { buttons } from './buttons';
import { appmain } from './appmain';

export default combineReducers({
  appmain,
  currentTime,
  buttons
});
