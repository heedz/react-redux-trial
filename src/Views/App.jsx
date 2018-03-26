import React, { Component } from "react";
import Navbar from "./Navbar";
import Content from "./Content";
import {connect} from 'react-redux'; 

class App extends Component {
  componentWillReceiveProps(nextProps){
    console.log(nextProps)
  }

  render() {
    const navbarData = [
      {
        name: "Home",
        link: "#",
        active: true
      },
      {
        name: "About",
        link: "#about"
      },
      {
        name: "Contact",
        link: "#contact"
      }
    ];

    const { notification } = this.props;

    return (
      <div className="body">
        {/* Check for notification */}
        {notification && notification}

        <Navbar title="Trial Button and Modal Window" />

        <Content />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    notification : state.notification
  }
}

export default connect(mapStateToProps)(App);
