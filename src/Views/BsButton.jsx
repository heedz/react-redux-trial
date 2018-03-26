import React from "react";
import "./Button.css";

class BsButton extends React.Component {
  render() {
    const { text, dataToggle, dataTarget, dataDismiss, onClick, styleName } = this.props;

    return (
      <button
        type="button"
        className={styleName}
        data-toggle={dataToggle}
        data-target={dataTarget}
        data-dismiss={dataDismiss}
        onClick={onClick} 
      >
        {text}
      </button>
    );
  }
}

export default BsButton;
