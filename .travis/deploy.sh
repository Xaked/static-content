#!/bin/bash

eval "$(ssh-agent -s)" # Start ssh-agent cache
chmod 600 .travis/id_rsa # Allow read access to the private key
ssh-add .travis/id_rsa # Add the private key to SSH

# Skip this command if you don't need to execute any additional commands after deploying.
ssh deploy@$IP -p $PORT <<EOF
  rm -rf $TEMP_DEPLOY_DIR
  mkdir $TEMP_DEPLOY_DIR
  cd $TEMP_DEPLOY_DIR
  git clone -b live https://github.com/Xaked/static-content.git .
  rm -rf $TEMP_DEPLOY_DIR/.git
  rm -rf $TEMP_DEPLOY_DIR/.travis
  rm -rf $TEMP_DEPLOY_DIR/.travis.yml
  rm -rf $TEMP_DEPLOY_DIR/.gitignore
  chmod -R u=rwX,g=rwX,o=rX *
  rsync -avu --delete "$TEMP_DEPLOY_DIR/" "$DEPLOY_DIR/"
EOF
