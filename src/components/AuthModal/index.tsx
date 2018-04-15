import React, { Component } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';

import { GoogleLogo, CloseIcon, FacebookLogo, EmailIcon } from '../icons';

import { actions, AuthModalState } from './state';

import styled, { withProps } from '../../lib/theme';
import { RootState } from '../../@types';
import LoginForm from '../forms/Login';

type Props = AuthModalState & typeof actions;

class AuthModal extends Component<Props> {
  render() {
    return (
      <Modal
        contentLabel="loginModal"
        shouldCloseOnOverlayClick={true}
        onRequestClose={this.props.close}
        isOpen={this.props.visible}
      >
        <Close onClick={this.props.close}>
          <CloseIcon fill="#999" />
        </Close>
        <Content>
          {/* <FacebookButton>
            <FacebookLogo />
            <Text>Continue with Facebook</Text>
          </FacebookButton>
          <GoogleButton>
            <GoogleLogo />
            <Text>Continue with Google</Text>
          </GoogleButton>
          <Or>
            <Hr width="45%" />or<Hr width="45%" />
          </Or>
          <EmailButton>
            <EmailIcon />
            <Text>Create account with Email</Text>
          </EmailButton>
          <Hr width="100%" margin="2.5rem 0" />
          <Login>
            Already have an account? &#0000; <Span>Log in</Span>
          </Login> */}
          <LoginForm />
        </Content>
      </Modal>
    );
  }
}

const Text = styled.span`
  padding-left: 1.6rem;
`;

const Close = styled.button`
  background-color: ${props => props.theme.white};
  float: right;
  height: 2rem;
  width: 2rem;
  margin-top: -3.5rem;
  margin-right: -3.5rem;
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
  font-size: 1.4rem;
  font-weight: 400;

  display: flex;
  justify-content: center;
`;

const Hr = withProps<{ width: string; margin?: string }>()(styled.hr)`
  width: ${props => props.width};
  margin: ${props => props.margin || '0'};
  border: 0.5px solid ${props => props.theme.lighterGrey};
`;

const Span = styled.span`
  color: ${props => props.theme.primaryRed};
  font-weight: 600;
  display: inline;

  &:hover {
    cursor: pointer;
  }
`;

const FacebookButton = Button.extend`
  background-color: ${props => props.theme.facebook};

  display: flex;
  align-items: center;
  justify-content: center;
`;

const GoogleButton = Button.extend`
  color: ${props => props.theme.black};
  background-color: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.grey};

  display: flex;
  align-items: center;
  justify-content: center;
`;

const EmailButton = Button.extend`
  background-color: ${props => props.theme.primaryRed};

  margin-top: 0;

  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Or = styled.div`
  color: ${props => props.theme.darkestGrey};

  font-size: 1.4rem;
  width: 100%;
  font-size: 1.5rem;
  margin: 2rem auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
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
    zIndex: 1,
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

const mapStateToProps = ({ authModal }: RootState): AuthModalState => ({
  visible: authModal.visible,
});

// https://github.com/reactjs/react-modal/issues/576 use ariaHideApp={false} to hide
// used to hide main app element for screen readers and only show modal content
if (typeof window !== 'undefined') {
  // only set app element if in browser
  Modal.setAppElement('#__next');
}

export default connect(mapStateToProps, actions)(AuthModal);
