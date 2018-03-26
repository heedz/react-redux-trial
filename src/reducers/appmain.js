import * as types from '../actions/types'

export function appmain(state = null, action){
    switch(action.type){
        case types.APP_NOTIFICATION:
            return action.notification;
        default:
            return state;
    }
}