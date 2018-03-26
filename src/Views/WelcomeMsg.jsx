import React from 'react';
import Link from "react-router-dom/Link";
import {connect} from 'react-redux';

const mapStateToProps = state => {
  return {
    currentTime: state.currentTime
  }
}

class WelcomeMsg extends React.Component {
  render(){
    return(
      <div>
        <h1>Welcome!</h1>
        <p>Current Time : {this.props.currentTime}</p>
        <Link to="/app">Go to Application</Link>
      </div>
    )
  }
};

export default connect(
  mapStateToProps
)(WelcomeMsg);
