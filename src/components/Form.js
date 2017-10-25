//Form to enter email,user, password details

import React, { Component } from 'react';
import {connect} from "react-redux";
import {registerUser, ShowAccount} from "../actions/userActions";
import TextboxComponent from './Textbox';
import ButtonComponent from './Button';
import { Row, Col } from 'react-bootstrap';

class FormComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      Email: "",
      FullName: "",
      CompanyName: "",
      Password: "",
      ConfirmPassword: "",
      data: this.props.data,
      ResponseMessage: "",
      ResponseCode:"",
      EmailValid: true,
      NameValid: true,
      CompanyValid: true,
      PasswordValid: true,
      ConfirmPasswordValid: true,
      NameError: "",
      CompanyError:"",
      isEnabled: false
    }
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleFullNameChange = this.handleFullNameChange.bind(this);
    this.handleCompanyChange = this.handleCompanyChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
  }

  // for providing diffrenet validations

  validateEmail (email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email)
  }

  handleEmailChange(e){
    const email = e.target.value;
    const emailValid = this.validateEmail(email);

    this.setState({
      Email: email,
      EmailValid: emailValid
    });
  }

  validateFullName (FullName){
    if (!FullName) {
        this.setState({NameError: 'Full Name is Required'});
        return false;
    }
    if(FullName.length > 25){
      this.setState({NameError: 'Must be 25 characters or less'});
      return false;
    }
    return true;
  }

  handleFullNameChange(e){
    const name = e.target.value;
    const nameValid = this.validateFullName(name);

    this.setState({
      FullName: e.target.value,
      NameValid: nameValid
    });
  }

  /*validateCompanyName(CompanyName){
    if (!CompanyName) {
        this.setState({CompanyError: 'Company Name is Required'});
        return false;
    }
    return true;
  }*/
  handleCompanyChange(e){
    const companyname = e.target.value;
    //const companyValid = this.validateCompanyName(companyname)

    this.setState({
      CompanyName: e.target.value,
      //CompanyValid: companyValid
    });
  }

  validatePassword(Password){
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
    return re.test(Password)


  }
  handlePasswordChange(e){
    const Password = e.target.value;
    const PasswordValid = this.validatePassword(Password);

    this.setState({
      Password: Password,
      PasswordValid: PasswordValid
    });
  }

  validateConfirmPassword(Password, ConfirmPassword){
    console.log(Password);
    if(Password !== ConfirmPassword){
      this.setState({PasswordError: 'Passwords dont match'})
      return false;
    }
    else {
      this.setState({PasswordError: 'Passwords matched'})
    }
    return true;

  }
  handleConfirmPasswordChange(e){
    const confirmPassword = e.target.value;
    const confirmPasswordValid = this.validateConfirmPassword(this.state.Password, confirmPassword);

    this.setState({
      ConfirmPassword: confirmPassword,
      ConfirmPasswordValid: confirmPasswordValid
    });
  }

  render() {
    let fieldContainerClassEmail = 'field-container';
    let fieldContainerClassName = 'field-container';
    let fieldContainerClassCompany = 'field-container';
    let fieldContainerClassPassword = 'field-container';
    let fieldContainerClassConfirmPassword = 'field-container';
    const { Email, FullName, Password, ConfirmPassword, EmailValid, NameValid, CompanyValid, PasswordValid, ConfirmPasswordValid} = this.state
    const isEnabled = Email.length > 0 && FullName.length > 0 && Password.length > 0 && ConfirmPassword.length > 0;

    if(!EmailValid){
       fieldContainerClassEmail += ' error'
    }
    if(!NameValid){
       fieldContainerClassName += ' error'
    }
    if(!CompanyValid){
       fieldContainerClassCompany += ' error'
    }
    if(!PasswordValid){
       fieldContainerClassPassword += ' error'
    }
    if(!ConfirmPasswordValid){
       fieldContainerClassConfirmPassword += ' error'
    }

    return (
        <div className="form-layout">
          <Row>
            <Col>&nbsp;</Col>
          </Row>
          <Row>
            <Col md={4}></Col>
            <Col md={5}>
              <p className="mt8x">Already have an account?</p>
            </Col>
            <Col md={3}>
              <a href="">
                <ButtonComponent size="small" className="login-button" value="Login" />
              </a>
            </Col>
          </Row>
          <div className="header">
            <h2>Get Started Today!</h2>
            <h3>Tell us about yourself and join the family</h3>
            <form noValidate onSubmit={this.handleSubmit}>
              <div className={fieldContainerClassEmail}>
                  <TextboxComponent
                      type="text"
                      placeholder="Email"
                      val={this.state.Email}
                      onChangeEvent={this.handleEmailChange.bind(this)}
                  />
                  <span>E-mail address should be in the format abc@abc.com</span>
              </div>

              <div className={fieldContainerClassName}>
                <TextboxComponent
                  type="text"
                  placeholder="Full Name"
                  val={this.state.FullName}
                  onChangeEvent={this.handleFullNameChange.bind(this)}
                />
                <span>{this.state.NameError}</span>
              </div>

              <div className={fieldContainerClassCompany}>
              <TextboxComponent
                  type="text"
                  placeholder="Company Name"
                  val={this.state.CompanyName}
                  onChangeEvent={this.handleCompanyChange.bind(this)}
              />
              <span>{this.state.CompanyError}</span>
              </div>

              <div className={fieldContainerClassPassword}>
              <TextboxComponent
                  type="password"
                  placeholder="Password"
                  val={this.state.Password}
                  onChangeEvent={this.handlePasswordChange.bind(this)}
              />
              <span>Password must be between 6-20 characters and conatin atleast one digit, one uppercase letter and one lower case letter</span>
              </div>

              <div className={fieldContainerClassConfirmPassword}>
              <TextboxComponent
                  type="password"
                  placeholder="Confirm Password"
                  val={this.state.ConfirmPassword}
                  onChangeEvent={this.handleConfirmPasswordChange.bind(this)}
              />
              <span>{this.state.PasswordError}</span>
              </div>

              <hr />
              <ButtonComponent
                  type="submit" size="large"
                  registerUser={() => this.props.Register(this.state)}
                  className="Register"
                  value="Register" inline-block
                  disabled={isEnabled}
              />
              <ButtonComponent type="button" size="large"
                    value = "Show Info"
                    className="Popup"
                    ShowAccount={() => this.props.ShowInfo(this.state)}
                    block
              />
            </form>

            <div>
                <br></br>
                <h3>By creating an account you are agreeing to our <a href=""> <u> Terms and Conditions </u> </a>, and our <a href=""> <u>Privacy Policy.</u> </a> </h3>
            </div>

            <div className="modal fade" id="myModal" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title">{this.props.ResponseMessage}</h4>
                            </div>
                            <div className="modal-body">
                                Account with {this.props.Email} {this.props.ResponseCode === 'SUCCESS' ? ' resigtered successfully!': ' already exists!'}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      ID: state.ID,
      Email: state.Email,
      FullName: state.FullName,
      CompanyName: state.CompanyName,
      Password: state.Password,
      ResponseMessage: state.ResponseMessage,
      ResponseCode: state.ResponseCode
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      Register: (state) => {
          dispatch(registerUser(state));
      },
      ShowInfo: (state) => {
          dispatch(ShowAccount(state));
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormComponent);
