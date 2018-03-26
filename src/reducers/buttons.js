import * as Types from '../actions/types';

export function buttons(state = [], action){
  switch(action.type){
      case Types.GET_BUTTON_LIST:{
        return action.buttons;
      }
      default:
        return state;
  }
};
