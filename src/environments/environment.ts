// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyC3j8p4lkAZOKsAp-eJfiFVGk1L7zjrElY',
    authDomain: 'ng-firebase-demo.firebaseapp.com',
    databaseURL: 'https://ng-firebase-demo.firebaseio.com',
    projectId: 'ng-firebase-demo',
    storageBucket: '',
    messagingSenderId: '617128559251'
  }
};
