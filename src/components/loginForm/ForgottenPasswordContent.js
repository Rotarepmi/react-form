import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import colors from '../../constants/colors';
import avatarImg from '../../assets/avatar.jpg';

import FormLabel from './FormLabel';

// import similar stylings for form content
import { 
  ContentWrapper, 
  FormContent,
  ErrorMsg, 
  InputWrapper,
  Tooltip,
  InputShape,
  FormFooter,
  StyledButton
} from './LoginFormContent';

// extend styles
const FormContentExt = FormContent.extend`
  padding: 35px 45px 0 45px;

  & > p {
    margin: 0;
    padding: 0;
    font-size: 14px;
    font-weight: 600;
    color: ${colors.textGrey};
    max-width: 370px;
  }

  & > label {
    margin-top: 30px;
  }
`;

const FormFooterExt = FormFooter.extend`
  justify-content: space-between;
`;

const StyledButtonExt = StyledButton.extend`
  @media (max-width: 767px) {
    font-size: 15px;
    padding: 9px 10px;
  }

  @media (max-width: 374px) {
    font-size: 14px;
    padding: 7px 9px;
  }
`;

const CancelButton = styled(Link)`
  font-size: 16px;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 600;
  line-height: 1;
  background-color: ${colors.white};
  border: solid 1px ${colors.error};
  border-radius: 5px;
  color: ${colors.error};
  padding: 18px 30px;
  outline: none;
  cursor: pointer;
  transition: all .2s ease-in-out;

  &:hover {
    color: ${colors.white};
    border-color: ${colors.white};
    background-color: ${colors.error};
  }

  @media (max-width: 767px) {
    font-size: 15px;
    padding: 9px 10px;
  }

  @media (max-width: 374px) {
    font-size: 14px;
    padding: 7px 9px;
  }
`;

const ForgottenPasswordContent = ({ email, emailValid, resetState, handleUserInput }) => (
  <ContentWrapper>
    <FormLabel 
      label="Reset Password"
      avatar={avatarImg}
    />
    <FormContentExt>
      <p>Hey, it happens to everyone.</p>
      <p>Just let us know what email address you use to login and we'll send you an email with instructions</p>
    
      <InputWrapper valid={emailValid}>
        <label htmlFor="emailForgotten">
          Email address
        </label>
        <input 
          id="emailForgotten" 
          type="email"  
          name="email"
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
    </FormContentExt>
    <FormFooterExt>
      <CancelButton 
        to={'/login'}
        onClick={resetState}
      >
        Cancel
      </CancelButton>
      <StyledButtonExt type="submit">
        Reset Password
      </StyledButtonExt>
    </FormFooterExt>
  </ContentWrapper>
);

ForgottenPasswordContent.propTypes = {
  email: PropTypes.string.isRequired,
  emailValid: PropTypes.bool.isRequired,
  handleUserInput: PropTypes.func.isRequired,
  resetState: PropTypes.func.isRequired,
}

export default ForgottenPasswordContent;