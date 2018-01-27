// @flow
import React, { Component } from 'react';
import Link from 'next/link';

type Props = {|
  username: string,
  children: any,
  prefetch?: boolean,
|};

export default class extends Component<Props> {
  render() {
    const { username, children, prefetch } = this.props;
    return (
      <Link
        prefetch={prefetch || false}
        as={`/${username}`}
        href={`/profile?username=${username}`}
      >
        {children}
      </Link>
    );
  }
}
