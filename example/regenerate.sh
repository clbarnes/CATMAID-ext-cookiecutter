#!/bin/bash

set -e

HERE="$( cd "$(dirname "$0")" ; pwd -P )"
GIT_BACKUP="$HERE/git_backup"
TGT="CATMAID-myextension"
OUTER_HASH=$(git rev-parse --short HEAD)
OUTER_DIFF=

if [[ -d "$TGT" ]]; then
    mv ${TGT}/.git ${GIT_BACKUP}
    rm -r ${TGT}
fi

cookiecutter --default-config -v ../

if [[ -d "$GIT_BACKUP" ]]; then
    mv ${GIT_BACKUP} ${TGT}/.git
fi

cd ${TGT}
git add .
git commit -m "CATMAID-ext-cookiecutter $(git rev-parse --short HEAD)\n\n$(git status -vv)"
