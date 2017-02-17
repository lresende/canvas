#!/bin/bash

set -e

WORKING_DIR="$PWD"
SCRIPT_DIR=$(dirname "$0")

echo "cd $SCRIPT_DIR"
cd $SCRIPT_DIR
npm link ../common-properties
npm link ../common-canvas
# install require modules
echo "npm install"
npm install
echo "grunt build"
grunt build

echo "cd $WORKING_DIR"
cd $WORKING_DIR