# Spacee Mars Rover Photos API
Build by Benjamin Sivoravong, Spacee work sample

## Build
To build the application:
1. Install dependencies with: 
```npm install```
2. Build the nest app with: 
```npm run build```

## Test
Unit tests can be run with: 
```npm run test ```

To generate a coverage report: 
```npm run test:cov```

## Run
Run the application with: 
```docker-compose up```

The docker-compose.yaml file is configured to build the docker container if it has not already been built
The image name will be 'spacee-api'

To force rebuilding of the container: 
```docker-compose up --build ```

## Apis
The only api available is at: http://localhost:3000/v1/rover/photo/date/\<year>/\<month>/\<day>