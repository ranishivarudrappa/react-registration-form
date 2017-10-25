//Intro component to display company image and welcome message

import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Image } from 'react-bootstrap';

class IntroComponent extends Component {
  render() {
    return (
      <div className="login_overlay">
        <Image src={logo} className="App-logo" alt="logo" responsive />
        <h1 className="h1">
          Trusted by the Worlds Top Brands
        </h1>
      </div>
    );
  }
}

export default IntroComponent;
