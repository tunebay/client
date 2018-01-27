// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';

import withData from '../lib/withData';

type Props = {|
  authModal: {
    visble: boolean,
  },
|};

class TestPage extends Component<Props> {
  render() {
    console.log(this.props);
    return <h1>{this.props.visble ? 'visble' : 'hidden'}</h1>;
  }
}

const mapStateToProps = ({ authModal }: Props) => ({ authModal });

export default withData(connect(mapStateToProps)(TestPage));
