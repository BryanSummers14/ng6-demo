# Ng6Demo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

# Why use Angular?

Feel free to skip this section and just get to the examples. This is just my thoughts on why anyone would need or use Angular. 

If Angular is just compiles down to HTML, CSS, and plain old JavaScript, why the heck would I bother with yet another layer of abstraction when I could just write it directly? With JavaScript I add event listeners, and then attach some callbacks. So would I want to bother having to deal with dependency injection, a module system, services, directives, pipes, decorators... this list goes on. To understand why anyone would bother with such complications, I think we need to go back in time a little bit. In [Atomic Design](http://atomicdesign.bradfrost.com) by Brad Frost, he discusses

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

So how do we deliver increasingly complex web applications and deliver them fast? 

I would consider the 3 big players for front end frameworks (there are of course hundreds) are Angular, React, and up and coming Vue. Not to discount Preact, but because it's under the same mental model as React, there's no need to dig in too deep here.

I would differentiate them like so: Angular is the whole ecosystem. It comes with everything to you need to make a full blown complex web app, including dependency injection, typescript out of the box, services, rxjs, DOM abstractions, Animations are based on the WebAnimationsApi so animations run in a separate thread and don't lock up the DOM, and so much more.

React is a more modular view layer DSL (JSX is really only used in React AFAIK so I'm counting it). React provides no abstraction for services, routing, http, it is strictly the view layer, and at that, it is incredible. React is absolutely amazing for modular components, and predictable UI.

As for Vue, it really is more of an outlier as it is more extensible than either. It isn't as full blown as Angular, but provides more than React. It is easy to add Typescript and write it in an Angular looking fashion, as well as JSX and have React looking components all within the same app. And if you just want to use the basic version of it, it doesn't even require a build step [Replacing jQuery With Vue.js: No Build Step Necessary](https://www.smashingmagazine.com/2018/02/jquery-vue-javascript/)

If you are just building a few simple web pages, there is no reason for added complexity, there is nothing wrong with jQuery for simple sites. But imagine using only jQuery to build [this](http://akveo.com/ngx-admin/#/pages/dashboard) as a single-page app.

And just because I find it awesome, you can check out [vue-babylon](https://beg-in.github.io/vue-babylonjs/#/home)

In the end it's all about building incredible experiences for our users [Native-Like Animations for Page Transitions on the Web](https://css-tricks.com/native-like-animations-for-page-transitions-on-the-web/)
## Development server

Run `ng serve` for a dev server for a basic project, to serve the example project run `ng serve --project example-setup`. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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
