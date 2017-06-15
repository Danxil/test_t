# Project instalation

### Requirements:

NodeJS last version

### How to start:

Go to the root directory of the project

#### To install all dependencies:
npm install

#### To start fake server on "http://localhost:9001":
npm run fake-server

#### To start front-end application on "http://localhost:9000":
npm run start

# Fake server API:

GET http://localhost:9001/profile

GET http://localhost:9001/persons


# Tasks:
Add button "Persons" to the header menu. This button should redirect user to the "Persons page" and "/persons" route.

On the "Persons" page user should see list of all persons which came from the "GET http://localhost:9001/persons" API endpoint.

Use for this:
http://getbootstrap.com/components/#panels like a component for displaying each person.

https://redux-saga.js.org/ or https://github.com/gaearon/redux-thunk like a middleware for operating with asynchronous actions of "redux".

Which of them to use, is up to you. First one is more simple, second one is more modern.

But pay attention that, redux-saga alreay setted up and used in project. In case, if you will choose redux-thunk - you have to set up it yourself.

Before you start, you should know what is "Promise" and how it works - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

As well, if you will chose redux-saga what you should know what is "Generators" and how it works - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators
