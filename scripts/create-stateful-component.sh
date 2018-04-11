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


cat << EOF > index.js
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { actions, type $(echo $ComponentName)State } from './state'

type Props = $(echo $ComponentName)State & typeof actions

class $ComponentName extends Component<Props, void> {
  render() {
    return (
      <View>
        <AppText>$ComponentName</AppText>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({}) // TODO
export default connect(mapStateToProps, actions)($ComponentName)
EOF

cat <<EOF > state.js
export type $(echo $ComponentName)Action = TodoAction
type TodoAction = { type: '$ComponentName/todo' }

export const actions = {
  todo(): TodoAction {
    return { type: '$ComponentName/todo' }
  },
}

export type $(echo $ComponentName)State = {

}

const initialState: $(echo $ComponentName)State = {

}

export default function reducer(
  state: $(echo $ComponentName)State = initialState,
  action: $(echo $ComponentName)Action,
): $(echo $ComponentName)State {
  switch (action.type) {
    case '$ComponentName/todo':
      return { ...state, /* TODO */ }
    default:
      return state
  }
}
EOF

popd
