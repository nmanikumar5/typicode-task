# Typicode-task

## Run this application using docker.

## Please follow the below steps to continue

Make sure docker is installed in your system and login is done.

To check docker installed in system, open terminal and just enter below command

### `docker -v` // it should output docker version

Next step is to build image

Navigate to folder from terminal and execute below command

### `docker build -f Dockerfile -t typicode-task

once above step is succeeded then image will be created with named (typicode-task).

To verify execute below command

### `docker images` // this will list all the images

once we verify our image with named typicode-task execute below command to start application

docker run -p 3000:3000 typicode-task

the above will start application

## Follow below if no Docker installed

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Happy Using !!