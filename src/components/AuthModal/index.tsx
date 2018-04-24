import React, { Component } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';

import { CloseIcon } from '../icons';

import { actions, AuthModalState } from './state';

import styled from '../../lib/theme';
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
          <LoginForm />
        </Content>
      </Modal>
    );
  }
}

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
