// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';

import withData from '../withData';
import { actions, type AuthModalState } from '../components/AuthModal/state';

type ActionProps = typeof actions;
type Props = ActionProps & AuthModalState;
// type ActionProps = { show: () => any, hide: () => any };

class TestPage extends Component<Props> {
  render() {
    return (
      <h1>
        {this.props.visible ? 'visble' : 'hidden'}
        <button onClick={this.props.show}>click me</button>;
      </h1>
    );
  }
}

const mapStateToProps = ({ authModal }): AuthModalState => ({
  visible: authModal.visible,
});

export default withData(connect(mapStateToProps)(TestPage));
