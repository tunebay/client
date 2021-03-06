#!/usr/bin/env bash

if [ $# -ne 1 ]; then
  echo "usage: create-component <ComponentName>"
  exit 1
fi

ComponentName=$1

RelativeProjectRoot="`dirname $0`/.."
ProjectRoot="`cd $RelativeProjectRoot; pwd`"

cat << EOF > "$ProjectRoot/src/components/$ComponentName.tsx" 
import * as React from 'react';

interface Props {}

export default (props: Props) => {
  return <$ComponentName>$ComponentName</$ComponentName>;
}

const $ComponentName = styled.div``;
EOF
