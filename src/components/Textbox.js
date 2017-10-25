//Textbox component to render textbox for form fields 

import React, { Component } from 'react';
import { FormControl, FormGroup } from 'react-bootstrap';

class TextboxComponent extends Component {
  render() {
      return (
        <FormGroup className={this.props.className}>
          <FormControl
            bsSize={this.props.size}
            type={this.props.type}
            value={this.props.val}
            placeholder={this.props.placeholder}
            onChange={this.props.onChangeEvent}
          />
        </FormGroup>
      )
  }
}

export default TextboxComponent;
