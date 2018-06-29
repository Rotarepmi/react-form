import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
import { withRouter } from 'react-router-dom';
import { Route, Redirect } from 'react-router-dom';

import bgImg from '../assets/bgImg.png';

import LoginFormContent from './loginForm/LoginFormContent';
import ForgottenPasswordContent from './loginForm/ForgottenPasswordContent';

injectGlobal`
  html,
  body {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Montserrat', sans-serif;
  }
`;

const Container = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  background-image: url(${bgImg});
  background-position: center center;
  background-size: cover;
  margin: 0;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormWrapper = styled.form`
  width: 625px;
  height: auto;
  box-sizing: border-box;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      checkbox: false,
      emailValid: true,
      passwordValid: true
    }
  }

  // handle inputs value changes
  // call validation on change
  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    this.setState(
      { [name]: value },
      () => { this.validateField(name, value) }
    );
  }

  // simple form validation
  validateField = (fieldName, value) => {
    let emailValid = true;
    let passwordValid = true;

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ? true : false;
        this.setState({
          emailValid
        });
        break;
      case 'password':
        passwordValid = value.length >= 6;
        this.setState({
          passwordValid
        });
        break;
      default:
        break;
    }
  }

  // submit form (just show alert msg)
  // handleSubmit for valid Login form and change password form separately
  handleSubmit = (e) => {
    e.preventDefault();
    if(e.target.elements.length > 2) {
      this.state.emailValid && this.state.passwordValid && this.state.email.length && this.state.password.length
      ? alert(`email: ${this.state.email} password: ${this.state.password} rememeberMe: ${this.state.checkbox ? 'yes' : 'no'}`)
      : alert("Form has invalid values");
    }
    else {
      this.state.emailValid && this.state.email.length
      ? alert(`Email changed to: ${this.state.email}`)
      : alert("Form has invalid values");
    }
    
  }

  // reset inputs state while changing directory
  resetState = () => {
    this.setState({ 
      email: '',
      password: '',
      checkbox: false,
      emailValid: true,
      passwordValid: true
    });
  }
  
  render() {
    const { email, password, emailValid, passwordValid, checkbox } = this.state;

    return (
      <Container>
        <FormWrapper onSubmit={this.handleSubmit}>
          {/* start page on /login directory */}
          <Route exact path="/" 
            render={() => ( 
              <Redirect to="/login" />
            )}
          />
          
          {/* render Login Content */}
          <Route 
            path="/login"
            render={
              () => <LoginFormContent
                email={email}
                password={password}
                checkbox={checkbox}
                emailValid={emailValid}
                passwordValid={passwordValid}
                resetState={this.resetState}
                handleUserInput={this.handleUserInput}
              />
            }
          />
          
          {/* render Forgotten Password Content */}
          <Route 
            path="/fpassword"
            render={
              () => <ForgottenPasswordContent 
                email={email}
                emailValid={emailValid}
                resetState={this.resetState}
                handleUserInput={this.handleUserInput}
              />
            }
          />
        </FormWrapper>
      </Container>
    );
  }
}

export default withRouter(App);
