import * as types from './types';

export const getNewTime = (currentTime) => ({
  type: types.GET_CURRENT_TIME,
  currentTime: currentTime
})

export const getButtonList = (buttons) => ({
  type: types.GET_BUTTON_LIST,
  buttons: buttons
})

export const setNotification = (notification) => ({
  type: types.APP_NOTIFICATION,
  notification: notification
})

export function deleteButton(button, notification) {
  return (dispatch, getState) => {
    const currentState = getState();

    dispatch(getButtonList(
      currentState.buttons.filter(e => e !== button)
    ))
    
    dispatch(showNotification(notification));
  }
}

export function showNotification(notification) {
  return (dispatch, getState) => {
    dispatch(setNotification(notification))
    
    setTimeout(() => {
      dispatch(setNotification(null))
    }, 2000)
  }
}
