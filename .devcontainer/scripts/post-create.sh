#!/bin/bash

# setup the git identities
git config --global user.name "${GIT_AUTHOR_NAME}"
git config --global user.email "${GIT_AUTHOR_EMAIL}"

pnpm install --frozen-lockfile
