import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Switch from "react-router-dom/Switch";
import WelcomeMsg from './Views/WelcomeMsg';
import {GoToApp} from './Views/GoToApp';

class AppRouter extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/app" component={GoToApp} />
          <Route path="/" component={WelcomeMsg} />
        </Switch>
      </Router>
    );
  }
}

export default AppRouter;
