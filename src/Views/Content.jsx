import React from "react";
import BsButton from "./BsButton";
import ModalDialog from "./ModalDialog";
import Notification from "./Notification";
import {deleteButton} from '../actions/actions';
import {connect} from 'react-redux';

class Content extends React.Component {
  render() {
    const buttons = this.props.buttons;

    return (
      <div className="container">
        {buttons.map(current => {
          return (
            <ModalDialog
              id={current.id}
              title="Delete Button"
              text={
                "Are you sure want to delete " + current.text + " permanently?"
              }
            >
              <BsButton
                text="Yes"
                styleName="btn btn-primary"
                dataDismiss="modal"
                onClick={() => {
                  this.props.deleteButton(current, <Notification message="Button deleted successfully!" type="success" />);
                }}
              />
              <BsButton
                text="No"
                styleName="btn btn-secondary"
                dataDismiss="modal"
              />
            </ModalDialog>
          );
        })}

        {buttons.map(current => {
          return (
            <BsButton
              text={current.text}
              dataToggle="modal"
              dataTarget={"#" + current.id}
              styleName="btn btn-primary"
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    buttons: state.buttons
  }
}

const mapDispatchToProps = dispatch => {
  return{
    deleteButton: (button, notification) => dispatch(deleteButton(button, notification))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);
