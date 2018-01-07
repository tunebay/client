import React, { Component } from 'react';
import { connect } from 'react-redux';

import withData from '../lib/withData';

class TestPage extends Component {
  render() {
    return <div>Test</div>;
  }
}

const mapStateToProps = state => state;

export default withData(connect(mapStateToProps)(TestPage));
