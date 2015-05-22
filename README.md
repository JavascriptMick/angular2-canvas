# Canvas written in Angular 2

based on https://github.com/mdausmann/angular2-gulp-typescript

## Install Globals (if you haven't already)

    $ npm install -g gulp
    $ npm install -g http-server

## Install Locals

    $ cd angular2-canvas
    $ npm install

## Compile source and libs and move to dist

    $ gulp

## Make it go
    $ cd dist
    $ http-server
    # In a browser, visit http://localhost:8080/

## Other (optional) tasks

### Clean up the dist folder
    $ gulp clean

### Download Angular2 dev preview from https://code.angularjs.org
    $ gulp angular2
