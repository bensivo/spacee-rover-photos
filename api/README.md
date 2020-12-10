# Spacee Mars Rover Photos API
Build by Benjamin Sivoravong, Spacee work sample

## Build
To build the application:
1. Install dependencies with ```npm install```
2. Build the nest app with ```npm run build```

## Run
Run the application with Docker-Compose:
```
docker-compose up
```

The docker-compose.yaml file is configured to build the docker container if it has not already been built
The image name will be 'spacee-api'

To force rebuilding of the container:
```
docker-compose up --build
```