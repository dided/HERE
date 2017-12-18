HERE web app test
===================

Installation
-------------
1. npm install
2. npm test
3. npm start
4. Open http://localhost:8080

Stack
-------------
1. Vue/Vuex
2. Vue Router
3. Vue Resource
3. Webpack2/Webpack-dev-server/babel/jest/eslint/Sass/lodash
4. muse-ui

Everything is manually configured.

TODOS
-------------

1. More unit tests till 100% coverage - couldn't cover everything due too time constraints.
2. e2e tests
3. Scalable folder structure for store, everything is in index.js now should be separated into actions/mutations/getters and modules. Decided to go with simpler folder structure to save time.
4. Separate webpack into development and production builds.
5. Maybe separate Vue templates from JS? It sounds like a good idea and used to do it in AngularJS, but I am new to Vue, I don't know about the community's best practices.
6. API error handling. Could set up a flash message for the users to know something went wrong.
7. Loading screen for slower connections.

