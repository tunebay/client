#!/usr/bin/env bash

if [ $# -ne 1 ]; then
  echo "usage: create-component <ComponentName>"
  exit 1
fi

ComponentName=$1

RelativeProjectRoot="`dirname $0`/.."
ProjectRoot="`cd $RelativeProjectRoot; pwd`"

cat << EOF > "$ProjectRoot/src/components/$ComponentName.js"
// @flow
import React, { Component } from 'react'

type Props = {||}

class Layout extends Component<Props, void> {
  render() {
    return <div>Layout</div>
  }
}

export default Layout
EOF
