# Ng6Demo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server for a basic project, to serve the example project run `ng serve --project example-setup`. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Projects

There are multiple projects defined in our single repository, to serve a particular project run with the `ng serve --project [project-name]` command with desired project name. The `--open` flag can be appended to automatically open a browser as well.

#### Project rundown

Container Component: This is a super basic [schematics](https://github.com/angular/angular-cli) setup. It doesn't do anything really yet, but that's where you get to come in and finish it. A common pattern for component composition is the container/presentation [component design](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0). If you want to, feel free to come up with a schematic that would generate a generic container component.

Demo Project: Host for generated library and separate projects
 - Complex Element: This is not a complex element, but it is a basic setup for using Angular Elements. See about coming up with something more complex that can be shipped and used in any project, just like a real custom element! For inspiration I think the chat-box used in the example setup would be make for a great candidate. As for building/shipping I recommend [ngx-build-plus](https://www.npmjs.com/package/ngx-build-plus)
 - Demo Lib: A very basic library containing a single component and service. I'm sure if you dig around in the Example Setup project you can find some great candidates that could be pulled out into a library for better code re-use. [documentation](https://github.com/angular/angular-cli/wiki/stories-create-library). It will need to be built first before it can be used.
 - Example Setup: This is a very basic chat app, just to show path aliasing (Your IDE may yell at you regarding imports, I promise it's lying), some firebase, and some angular material. Really it makes building apps incredibly intuitive and easy. Though I'm sure I left lots of room for improvement, and don't hesitate if you feel so inclined. It is a working chat app via firebase, though I added no sanitation or verification, so please be responsible and don't make me shut it down earlier than I originally planned to.
 - My PWA: Progressive web apps are all the rage, and rightly so. So how hard is it to setup a PWA with angular? All I did was create this project and run `ng add @angular/pwa` and now we are setup with all the necessary config to get our app offline capable, installable, and provide consistent experiences across all network and device capabilities.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module|project|serviceWorker|appShell|library|universal`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
