#!/bin/bash

mkdir logs

# This script is used to install all the dependencies for the frontend

{
    echo "Installing frontend dependencies..."
    cd frontend
    npm install

    echo "Installing react-modal..."
    npm i react-modal

    echo "Installing react-router-dom..."
    npm i -D react-router-dom

    echo "Installing react-bootstrap..."
    npm install react-bootstrap bootstrap
} > ./logs/first-install.log 2>&1

npm start

cd ..
