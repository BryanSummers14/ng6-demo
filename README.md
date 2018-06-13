# Ng6Demo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

# Why use Angular?

Feel free to skip this section if you just want to get to the examples. This is just my thoughts on why anyone would need or use Angular (or something similar). 

If Angular just compiles down to HTML, CSS, and plain old JavaScript, why the heck would I bother with yet another layer of abstraction when I could just write it directly? With JavaScript I add event listeners, and then attach some callbacks. So would I want to bother having to deal with dependency injection, a module system, services, directives, pipes, decorators... the list goes on. To understand why anyone would bother with such complications, I think we need to go back in time a little bit. In [Atomic Design](http://atomicdesign.bradfrost.com) Brad Frost discusses

> Tim Berners-Lee invented the World Wide Web so that he, his colleagues at CERN, and other academics could easily share and link together their world of documents. This document-based, academic genesis of the web is why the concept of the page is so deeply ingrained in the vocabulary of the internet.

> The page was – and continues to be – a very visible and helpful metaphor for the users of the web. It also has a profound influence on how web experiences are created.

> In the early days of the web, companies looking to get online simply translated their printed materials onto their websites. But even though these brochure websites offered a very one-dimensional perspective of what the web could offer, viewing websites as digital representations of the printed page was easy for creators to wrap their heads around.

But he goes on

> Ultimately, a project’s level of effort is much better determined by the functionality and components contained within those pages, rather than on the quantity of pages themselves.

> The page metaphor has served its purpose helping users familiarize themselves with the web, and provided creators with the necessary transitional language with which to create for a brand new medium. But to build thoughtful interfaces meant to be served to a multitude of connected devices, the time has come for us to evolve beyond the page.

I like to think of it as the difference between a web page and a web app. A web page can consist of simply a tagline, background image and some basic information, nothing too complex (mostly what wordpress sites consist of). But, when it comes to building a full-blown application, we need to consider modularity, and with modularity comes components. 

More and more users are expecting (and rightly so) more and more functionality from web applications they encounter. Not only more functionality, they expect it to be fast

[Pinterest PWA case study](https://medium.com/dev-channel/a-pinterest-progressive-web-app-performance-case-study-3bd6ed2e6154)

> In a study done by Akamai, about half of web users expect a site to load in 2 seconds or less. If it isn’t loaded within 3 seconds, those users tend to abandon the site.

> An even more alarming statistic is that 64% of shoppers who are dissatisfied with an online store’s experience & loading time will take their business elsewhere.

So how do we deliver increasingly complex web applications and deliver them fast? Well to decrease bundle size and ship only what we need, there's code splitting. I won't lie, you naturally should get this with a multi-page app, but for a single-page app (which ideally has more natural transitions and less cognitive load on users having to make a mental map of a new page) it can be a complex mess determining what components are shipped, including any dependencies. Enter webpack which the frameworks I recommend all use under the hood (minus vue if it doesn't have a build step :) ). 

>Pros of the Single-Page Application:
>* SPA is fast, as most resources (HTML+CSS+Scripts) are only loaded once throughout      the lifespan of application. Only data is transmitted back and forth.
>* The development is simplified and streamlined. There is no need to write code to render pages on the server. It is much easier to get started because you can usually kick off development from a file file://URI, without using any server at all.
>* SPAs are easy to debug with Chrome, as you can monitor network operations, investigate page elements and data associated with it.
>* It’s easier to make a mobile application because the developer can reuse the same backend code for web application and native mobile application.
>* SPA can cache any local storage effectively. An application sends only one request, store all data, then it can use this data and works even offline.

>Cons of the Single-Page Application:
>* It is not an easy task to make SEO optimization of a Single-Page Application. While there have been great strides in making it easier, it can still be a bit tricky to get right
>* It is slow to download because heavy client frameworks are required to be loaded to the client. (Though there are strategies like code splitting and pre fecth/pre load)
>* It requires JavaScript to be present and enabled. If any user disables JavaScript in his or her browser, it won’t be possible to present application and its actions in a correct way
>* Compared to the “traditional” application, SPA is less secure. Due to Cross-Site Scripting (XSS), it enables attackers to inject client-side scripts into web application by other users. (Again great improvements have been made in this area, although if not addressed, can still be a concern)
>* Memory leaks in JavaScript can even cause a powerful system to slow down


I would consider the 3 big players for front end frameworks (there are of course hundreds) are Angular, React, and up and coming Vue. Not to discount Preact, but because it's under the same mental model as React, there's no need to dig in too deep here.

I would differentiate them like so: 

Angular is the whole ecosystem. As such, to me it is the clear winner for enterprise applications. It comes with everything you need to make a full blown complex web app right out of the box, including dependency injection, typescript, services, rxjs, DOM abstractions, Animations are based on the WebAnimations Api so animations run in a separate thread and don't lock up the DOM. But perhaps more importantly it provides an architecture that is meant for extensibility and scalability, which is not only used extensively across all of google, but it is the framework of choice for many businesses that have large development teams working across multiple projects. Just a few examples can be seen [here](https://www.madewithangular.com/categories/angular). The Architecture model has even become so popular it has been adopted by [NestJs](https://nestjs.com/) for building complex node applications at scale. [Angular docs](https://angular.io/docs), [Angular CDK](https://material.angular.io/cdk/categories)

React is a more modular view layer DSL (JSX is really only used in React AFAIK so I'm counting it). React natively provides no abstraction for services, routing, or http. It is strictly the view layer, and at that, it is incredible. React is absolutely amazing for modular components, and predictable UI at a view component level.

As for Vue, it really is more of an outlier as it is more of a is a progressive framework than either of React or Angular. It isn't as full blown as Angular, but provides more than React. It is easy to add Typescript and write it in an Angular looking fashion, as well as JSX and have React looking components all within the same app. And if you just want to use the basic version of it, it doesn't even require a build step [Replacing jQuery With Vue.js: No Build Step Necessary](https://www.smashingmagazine.com/2018/02/jquery-vue-javascript/), which would easily pair with AEM and make component client libs (especially for complex components with multiple possible states) much easier to write, debug, and ship.

If you are just building a few simple web pages, there is no reason for added complexity, there is nothing wrong with jQuery for simple sites. But imagine using only jQuery to build [this](http://akveo.com/ngx-admin/#/pages/dashboard) as a single-page app.


In the end it's all about building incredible experiences for our users [Native-Like Animations for Page Transitions on the Web](https://css-tricks.com/native-like-animations-for-page-transitions-on-the-web/)

And just because I find it awesome, you can check out [vue-babylon](https://beg-in.github.io/vue-babylonjs/#/home)

P.S. There are excellent options for allowing authors to easily generate content for any of these frameworks, my favorite being [contentful](https://www.contentful.com/)

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
