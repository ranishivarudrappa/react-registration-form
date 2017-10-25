import React, { Component } from 'react';
import '../App.css';
import FormComponent from './Form';
import IntroComponent from './Intro';
import LoaderComponent from './Loader';
import { Grid, Row, Col } from 'react-bootstrap';

var userData = [
  {
    Email: "Tani@gmail.com",
    FullName: "Tani"
  },
  {
    Email: "Rani@gmail.com",
    FullName: "Rani"
  },
  {
    Email: "Aani@gmail.com",
    FullName: "Aani"
  }
];

class App extends Component {
  constructor(){
    super();
    this.state = {
      userData: userData
    }
  }

  render() {
    return (
      <Grid fluid>
        <Row className="show-grid">
          <Col md={6}>
            <IntroComponent />
          </Col>
          <Col md={6}>
            <FormComponent data={this.state.userData} />
            <LoaderComponent />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
