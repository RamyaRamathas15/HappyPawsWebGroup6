import React, { Component } from 'react';
import './login.css';

class Error extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className="center">
                <h3 className="center"> Looks like this URL does not exist! </h3>
                <h3 className="center"> Check your URL and try again :) </h3>
                </div>
            </React.Fragment> );
    }
}
 
export default Error;