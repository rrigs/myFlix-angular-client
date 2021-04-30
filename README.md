# myFlix Client-Side Angular App

## Overview

The objective for this last project from my online web development course was to use Angular to build the client-side for an app called myFlix based on existing server-side code, with supporting documentation.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.6.

### View it live [HERE](https://rrigs.github.io/myFlix-angular-client/welcome)

Check out the code for the myFlix API [HERE](https://github.com/rrigs/myFlix-API)

## Technologies:

- Angular
- TypeScript
- node.js
- npm
- Angular Material
- TypeDoc

## Key Features:

- **Welcome view** where existing users can **login** and new users can **register**
- Once authenticated, user will be taken to an **all movies view** with the following features:
  - Button to **log out**
  - Button that takes user to **profile view** where profile information can be viewed and updated or deleted
- After clicking on specific movie, user will be taken to **single movie view** with more details about the movie and the following features:
  - Button that takes user to **director view**
  - Button that takes user to **genre view**
  - Button that adds movie to users list of **favorites**

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
