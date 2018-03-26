import React from "react";
import "./Button.css";

class Button extends React.Component {
  render() {
    const { text, onClick, styleName } = this.props;

    return (
      <button
        type="button"
        className={styleName}
        onClick={onClick} 
      >
        {text}
      </button>
    );
  }
}

export default Button;
