// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  mapbox: {
    accessToken:
      "pk.eyJ1IjoiY291bnRyZWRjbGF3IiwiYSI6ImNqd2t1cWVoazB4aW00Nm42ZGxmZ3JxNHAifQ.c0trfpPdYr2NFGIKWtp1tQ"
  },
  firebase: {
    apiKey: "AIzaSyBrwjjv5OFDBLzUwzkpARP1t78FYvgaaZ0",
    authDomain: "fir-test-aeb2c.firebaseapp.com",
    databaseURL: "https://fir-test-aeb2c.firebaseio.com",
    projectId: "fir-test-aeb2c",
    storageBucket: "fir-test-aeb2c.appspot.com",
    messagingSenderId: "45095595806",
    appId: "1:45095595806:web:865b26811b259962"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
