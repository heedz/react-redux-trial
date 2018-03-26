import * as Types from '../actions/types';

export function currentTime(state = "", action) {
  switch (action.type) {
    case Types.GET_CURRENT_TIME:
      return action.currentTime;
    default:
      return state;
  }
}
