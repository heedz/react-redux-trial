import React from 'react';
import './Navbar.css';

class Navbar extends React.Component{
    render(){
        const {title, data} = this.props;

        return(
            <div className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">

                    <div className="navbar-header">
                        {title && <h8 className="navbar-brand">{title}</h8>}
                    </div>

                    <div id="navbar" className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            {
                                data && 
                                data.map(ea => {
                                    if(ea.active === true)
                                        return(<li className="active"><a href={ea.link}>{ea.name}</a></li>);
                                    else
                                        return(<li><a href={ea.link}>{ea.name}</a></li>);
                                })
                            }
                        </ul>
                    </div>

                </div>
            </div>
        );
    }
}

export default Navbar;