import React from 'react';
import './Notification.css';

class Notification extends React.Component{
    constructor(props){
        super(props);
    }
    
    static defaultProps = {
        type : "info"
    }
    
    render(){
        const{message, type} = this.props;

        if(type == "success"){
            return(
                <div className="alert alert-success">
                    <i className="fa fa-check-circle"/> {message}
                </div>
            )
        }else if(type == "error"){
            return(
                <div className="alert alert-danger">
                    <i className="fa fa-exclamation-circle"/> {message}
                </div>
            )
        }else if(type == "warning"){
            return(
                <div className="alert alert-warning">
                    <i className="fa fa-exclamation-triangle"/> {message}
                </div>
            )
        }else{
            return(
                <div className="alert alert-info">
                    <i className="fa fa-info-circle" />{message}
                </div>
            )
        }
        
    }
}

export default Notification;