//Loader component to display a message after Registering

import React, { Component } from 'react';

class LoaderComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
          Email: "",
          FullName: "",
          CompanyName: "",
          Password: "",
          ConfirmPassword: ""
        }
    }
  render() {
    return (
        <div id="myNav" className="overlay">
            <div className="overlay-content">
                <a>Registering your account...</a>
                <div className="loader"></div>
            </div>
        </div>
    );
  }
}

export default LoaderComponent;
