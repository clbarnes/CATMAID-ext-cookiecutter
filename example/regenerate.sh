#!/bin/bash

set -e

HERE="$( cd "$(dirname "$0")" ; pwd -P )"
GIT_BACKUP="$HERE/git_backup"
TGT="CATMAID-myextension"

COMMIT_MSG=$(cat <<-END
CATMAID-ext-cookiecutter $(git rev-parse --short HEAD)

$(git status -vv)
END
)

if [[ -d "$TGT" ]]; then
    mv ${TGT}/.git ${GIT_BACKUP}
fi

cookiecutter --default-config -f --no-input ../

if [[ -d "$GIT_BACKUP" ]]; then
    mv ${GIT_BACKUP} ${TGT}/.git
else
    cd $TGT
    git init
    cd $HERE
fi

cd ${TGT}
git add .
git commit -m "$COMMIT_MSG"
