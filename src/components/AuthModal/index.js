// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import { connect } from 'react-redux';

import { Google } from '../svgs';

import { type AuthModalState } from './state';

// import withData from '../../lib/withData';
// import { graphql, compose } from 'react-apollo';
// import gql from 'graphql-tag';

type Props = {||};

class AuthModal extends Component<Props> {
  static defaultProps: Props;
  render() {
    return (
      /* TODO https://github.com/reactjs/react-modal/issues/576 */
      <Modal
        contentLabel="loginModal"
        shouldCloseOnOverlayClick
        onRequestClose={() => console.log('close')}
        ariaHideApp={false}
        isOpen={false}
      >
        <Close onClick={() => console.log('close')}>X</Close>
        <Content>
          <FacebookButton>Continue with Facebook</FacebookButton>
          <GoogleButton>
            <Google />Continue with Google
          </GoogleButton>
          <Or>or</Or>
          <EmailButton>Create account with Email</EmailButton>
          <Hr />
          <Login>
            Already have an account? <Span>Log in</Span>
          </Login>
        </Content>
      </Modal>
    );
  }
}

const Close = styled.button`
  color: ${props => props.theme.darkGrey};
  background-color: ${props => props.theme.white};
  float: right;
  height: 2rem;
  width: 2rem;
  margin-top: -3rem;
  margin-right: -3rem;
  border: none;
  font-size: 2rem;

  &:hover {
    cursor: pointer;
    color: ${props => props.theme.black};
  }
`;

const Button = styled.button`
  width: 100%;
  height: 6.8rem;
  margin-top: 2rem;
  border-radius: 6px;
  border: none;
  outline: none;
  font-size: 1.6rem;
  font-weight: 600;
  color: ${props => props.theme.white};

  &:hover {
    cursor: pointer;
  }
`;

const Login = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 400;
`;

const Hr = styled.hr`
  margin: 3rem 0;
  border: 0.5px solid ${props => props.theme.lightGrey};
`;

const Span = styled.span`
  color: ${props => props.theme.primaryRed};
  font-weight: 600;
  display: inline;
`;

const FacebookButton = Button.extend`
  background-color: ${props => props.theme.facebook};
`;

const GoogleButton = Button.extend`
  color: ${props => props.theme.black};
  background-color: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.grey};
`;

const EmailButton = Button.extend`
  border: none;
  margin-top: 0;
  background-color: ${props => props.theme.primaryRed};
`;

const Or = styled.div`
  font-size: 1.4rem;
  color: ${props => props.theme.darkestGrey};
  text-align: center;
  width: 100%;
  font-size: 1.5rem;
  margin: 2rem auto;
`;

const Content = styled.div``;

Modal.defaultStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
  content: {
    position: 'relative',
    width: '60rem',
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: '6rem 6rem 3rem 6rem',
  },
};

const mapStateToProps = ({ authModal }): AuthModalState => ({
  visible: authModal.visble,
});

export default connect(mapStateToProps)(AuthModal);
