import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import defaultAvatar from '../../assets/default-avatar.jpg';

const StyledFormLabel = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 90px;
  background-color: #0094bb;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 7px;

  @media (max-width: 374px) {
    height: 50px;
    justify-content: center;
    margin-top: 120px;
  }
`;

const Avatar = styled.img`
  width: 116px;
  height: 116px;
  border-radius: 50%;
  border: solid 2px #0094bb;
  margin: 40px;

  @media (max-width: 374px) {
    margin: 0;
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%) translateY(-100%);
  }
`;

const LabelText = styled.span`
  color: #ffffff;
  text-transform: uppercase;
  font-size: 31px;
  font-weight: 600;

  @media (max-width: 532px) {
    font-size: 25px;
  }

  @media (max-width: 374px) {
    font-size: 22px;
  }
`;

const FormLabel = (props) => (
  <StyledFormLabel>
    <Avatar src={props.avatar} alt="" />
    <LabelText>
      {props.label}
    </LabelText>
  </StyledFormLabel>
);

FormLabel.propTypes = {
  label: PropTypes.string.isRequired,
  avatar: PropTypes.string
}

FormLabel.defaultProps = {
  avatar: defaultAvatar
}

export default FormLabel;