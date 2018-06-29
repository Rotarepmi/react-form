import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import colors from '../../constants/colors';
import okIcon from '../../assets/ok.png';
import avatarImg from '../../assets/avatar.jpg';

import FormLabel from './FormLabel';

export const ContentWrapper = styled.div`
  width: 100%;
`;

export const FormContent = styled.div`
  width: 100%;
  box-sizing: border-box;
  background-color: ${colors.white};
  padding: 35px 45px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (max-width: 374px) {
    padding: 35px 15px;
  }
`;

export const ErrorMsg = styled.p`
  position: absolute;
  bottom: -6px;
  right: 0;
  font-size: 14px;
  font-weight: 600;
  color: ${colors.error};
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 12px 0 32px 0;

   & > input {
    font-size: 16px;
    padding: 15px 50px 15px 17px;
    margin-top: 12px;
    border-radius: 5px;
    border-style: solid;
    border-width: 1px;
    box-shadow: inset 0 0 5px ${colors.borderGrey};
    color: ${colors.borderGrey};
    outline: none;

    /* use props based on state to show error msges */
    border-color: ${props => props.valid ? colors.borderGrey : colors.error};

    &::placeholder {
      color: ${colors.borderGrey};
    }
  }

  & > label {
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 600;
    line-height: 1;
    color: ${props => props.valid ? colors.textGrey : colors.error}
  }
  
  & > ${ErrorMsg} {
    display: ${props => props.valid ? 'none' : 'inline-block'};
  }
`;

export const Tooltip = styled.div`
  position: absolute;
  padding: 8px 12px;
  border-radius: 5px;
  background-color: ${colors.ocean};
  color: ${colors.white};
  font-size: 14px;
  font-weight: 600;
  top: 28px;
  right: 0;
  transform: translateX(25%) translateY(-100%);
  opacity: 0;
  transition: all .2s ease-in-out;

  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px 10px 0 10px;
    border-color: ${colors.ocean} transparent transparent transparent;
    top: 100%;
    left: calc(50% - 10px);
  }
`;

export const InputShape = styled.div`
  position: absolute;
  width: 50px;
  height: calc(100% - 72px);
  top: 40px;
  right: 0;
  border-top-right-radius: 5px;
  overflow: hidden;
  cursor: pointer;

  &::before {
    content: '*';
    position: absolute;
    width: 100px;
    height: 50px;
    background-color: ${colors.ocean};
    color: ${colors.white};
    text-align: center;
    font-size: 26px;
    right: -42px;
    top: -25px;
    transform: rotate(-145deg);
  }

  &:hover ~ ${Tooltip} {
    opacity: 1;
  }
`;

const Checkbox = styled.div`
  & > input[type='checkbox'] {
    &:checked {
      display: none;

      & + label {
        display: inline-block;
        text-transform: uppercase;
        color: ${colors.textGrey};
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        position: relative;
        padding-left: 30px;

        &::before {
          content: '';
          position: absolute;
          width: 20px;
          height: 20px;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          border: solid 1px ${colors.borderGrey};
          color: ${colors.borderGrey};
          background-color: ${colors.white};
          border-radius: 5px;
        }

        &::after {
          content: '';
          position: absolute;
          width: 20px;
          height: 20px;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          background-image: url(${okIcon}); 
          background-position: bottom left;
          background-size: cover;
          padding: 5px 3px 0 3px;
          margin: -1px -3px 0 -3px;
        }
      }
    }

    &:not(:checked) {
      display: none;

      & + label {
        display: inline-block;
        text-transform: uppercase;
        color: ${colors.textGrey};
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        position: relative;
        padding-left: 30px;

        &::before {
          content: '';
          position: absolute;
          width: 20px;
          height: 20px;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          border: solid 1px ${colors.borderGrey};
          color: ${colors.borderGrey};
          background-color: ${colors.bgGrey};
          border-radius: 5px;
        }
      }
    }
  }
`;

export const FormFooter = styled.div`
  width: 100%;
  box-sizing: border-box;
  background-color: ${colors.bgGrey};
  padding: 35px 45px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-top: solid 1px ${colors.white};
  box-shadow: 0 -1px 0 ${colors.borderGrey};

  @media (max-width: 374px) {
    padding: 35px 15px;
  }
`;

const ForgottenLink = styled(Link)`
  font-size: 16px;
  text-decoration: none;
  color: ${colors.ocean};
  margin-right: 14px;
`;

export const StyledButton = styled.button`
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 600;
  line-height: 1;
  background-color: ${colors.white};
  color: ${colors.borderGrey};
  border: solid 1px ${colors.borderGrey};
  padding: 18px 30px;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  transition: all .2s ease-in-out;

  &:hover {
    color: ${colors.white};
    border-color: ${colors.white};
    background-color: ${colors.ocean};
  }

  @media (max-width: 767px) {
    font-size: 15px;
    padding: 12px 17px;
  }

  @media (max-width: 374px) {
    font-size: 14px;
    padding: 9px 15px;
  }
`;

const LoginFormContent = ({ email, password, emailValid, passwordValid, checkbox, resetState, handleUserInput }) => (
  <ContentWrapper>
    <FormLabel 
      label="Login"
      avatar={avatarImg}
    />
    <FormContent>
      <InputWrapper valid={emailValid}>
        <label htmlFor="email">
          Email address
        </label>
        <input 
          id="email" 
          type="email" 
          name="email"
          placeholder="Enter your email address" 
          value={email} 
          onChange={(event) => handleUserInput(event)}
        />
        <InputShape />
        <Tooltip>
          required
        </Tooltip>
        <ErrorMsg>
          Invalid email address
        </ErrorMsg>
      </InputWrapper>

      <InputWrapper valid={passwordValid}>
        <label htmlFor="password">
          Password
        </label>
        <input 
          id="password" 
          type="password" 
          name="password"
          placeholder="Enter your password"
          value={password}
          onChange={(event) => handleUserInput(event)}
        />
        <InputShape />
        <Tooltip>
          required
        </Tooltip>
        <ErrorMsg>
          Invalid password
        </ErrorMsg>
      </InputWrapper>
      
      <Checkbox>
        <input 
          id="checkbox" 
          type="checkbox"
          name="checkbox" 
          checked={checkbox}
          onChange={(event) => handleUserInput(event)}
        />
        <label htmlFor="checkbox">
          Remember me
        </label>
      </Checkbox>
    </FormContent>
    <FormFooter>
      <ForgottenLink 
        to={'/fpassword'}
        onClick={resetState}
      >
        Forgotten password?
      </ForgottenLink>
      <StyledButton type="submit">
        Login
      </StyledButton>
    </FormFooter>
  </ContentWrapper>
);

LoginFormContent.propTypes = {
  checkbox: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired,
  emailValid: PropTypes.bool.isRequired,
  handleUserInput: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  passwordValid: PropTypes.bool.isRequired,
  resetState: PropTypes.func.isRequired,
}

export default LoginFormContent;