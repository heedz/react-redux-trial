import React from "react";
import AppRouter from "./AppRouter";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

class Root extends React.Component {
  render(){
    const initialState = {
      currentTime: new Date().toString(),
      buttons: [
        {
          id: "button1",
          text: "Button 1"
        },
        {
          id: "button2",
          text: "Button 2"
        },
        {
          id: "button3",
          text: "Button 3"
        }
      ],
    }  
  
    const store = configureStore(initialState);
  
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );
  }
};

export default Root;
