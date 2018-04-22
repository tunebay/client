#!/usr/bin/env bash

if [ $# -ne 1 ]; then
  echo "usage: create-stateful-component <ComponentName>"
  exit 1
fi

ComponentName=$1

RelativeProjectRoot="`dirname $0`/.."
ProjectRoot="`cd $RelativeProjectRoot; pwd`"

ComponentRoot="$ProjectRoot/src/components/$ComponentName"
mkdir -p $ComponentRoot
pushd $ComponentRoot


cat << EOF > index.tsx
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actions, $(echo $ComponentName)State } from './state';

import { RootState } from '../../@types';

type Props = $(echo $ComponentName)State & typeof actions;

class $ComponentName extends Component<Props> {
  render() {
    return (
      <div>$ComponentName</div>
    );
  }
}

const mapStateToProps = (state: RootState) => ({});
export default connect(mapStateToProps, actions)($ComponentName);
EOF

cat <<EOF > state.ts
export type $(echo $ComponentName)Action = TodoAction;

interface TodoAction { 
  type: '$ComponentName/todo';
}

export const actions = {
  todo(): TodoAction {
    return { type: '$ComponentName/todo' };
  },
};

export interface $(echo $ComponentName)State {}

const initialState: $(echo $ComponentName)State = {};

export default function reducer(
  state: $(echo $ComponentName)State = initialState,
  action: $(echo $ComponentName)Action
): $(echo $ComponentName)State {
  switch (action.type) {
    case '$ComponentName/todo':
      return { ...state };
    default:
      return state;
  }
}
EOF

popd
