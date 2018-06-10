// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAUeNgajIWpHfl0wD4Wr7AsCgZdMvLqLAA",
    authDomain: "fir-3c32a.firebaseapp.com",
    databaseURL: "https://fir-3c32a.firebaseio.com",
    projectId: "fir-3c32a",
    storageBucket: "fir-3c32a.appspot.com",
    messagingSenderId: "187780717290"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
import 'zone.js/dist/zone-error';  // Included with Angular CLI.
