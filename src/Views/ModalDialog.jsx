import React from "react";
import Button from "./Button";
import "./ModalDialog.css";

class ModalDialog extends React.Component {
  render() {
    const { id, title, text } = this.props;

    return (
      <div className="modal fade" id={id} role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <Button styleName="close" dataDismiss="modal" text="&times;" />
              <h4 className="modal-title">{title}</h4>
            </div>

            <div className="modal-body">
              <p>{text}</p>
            </div>

            <div className="modal-footer">{this.props.children}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalDialog;
