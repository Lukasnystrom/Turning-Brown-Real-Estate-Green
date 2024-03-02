@echo off

REM This script is used to install all the dependencies for the frontend
(
    call cd frontend
    echo Installing frontend dependencies...
    call npm install
    echo Installing react-modal...
    call npm i react-modal
    echo Installing react-router-dom...
    call npm i -D react-router-dom
    echo Installing react-bootstrap...
    call npm install react-bootstrap bootstrap
    
) > .\logs\first-install.log 2>&1

call npm start

call cd ..

@echo on