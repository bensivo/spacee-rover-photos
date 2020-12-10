# Spacee Rover Photos
This repo contains 2 applications, an API portion, and a front-end portion

Build and Run instructions can be found in the README's of the api and app directories.

The docker-compose file here can be used to run both applications, assuming they have been built.


## Features Implemented
Backend:
* NestJS api
* Basic input validation
* Unit Testing with Jest
* Linting with eslint
* Formatting with Prettier
* Incoming HTTP Request logging
* Outgoing HTTP Request logging using axios interceptors
* Cloud-Ready (Almost all 12 factors of cloud readiness)
* In-Memory cache
* Runs in Docker (with included docker-compose for easy startup)

Frontend:
* Angular10 Webapp
* Angular Material components
* Runs in Docker (with included docker-compose for easy startup)

## Future Work
Backend:
* Replace in-memory cache with a Redis Cache (using a LRU caching strategy)
* Add performance test scripts with JMeter
* CI pipeline - automatically build and publish a docker image to Gitlab container registry

Frontend:
* Unit and Functional tests
* Updated design and stylings across the app
* Add loaders during HTTP request
* Add an error dialog if anything goes wrong
* Add a dialog for 'no images found'
* CI pipeline - automatically build and publish a docker image to Gitlab container registry


## If I were to deploy this to production
* CD pipelines for both apps
* API Keys with rate-limiting
* More restrictive CORS, using registered domain names
* E2E tests in a dev environment
* Helm chart for quick deployment to a k8s cluster
