#!/bin/bash
if [ -e './.npmrc' ]; then
    echo ".npmrc file already exists!"
else
    echo $'@renansigolo-hf:registry=https://npm.pkg.github.com\n//registry.npmjs.org/:_authToken=${NPM_AUTH_TOKEN}' >>"./.npmrc"
fi
