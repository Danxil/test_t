import { combineReducers } from 'redux';
import { fork } from 'redux-saga/effects';
import { routerReducer } from 'react-router-redux';
import { authenticationReducer, authenticationSaga } from './authentication';
import { personsDataReducer, personsDataSaga } from './personsData';

export const rootReducer = combineReducers({
  authentication: authenticationReducer,
  routing: routerReducer,
  persons: personsDataReducer,
});

export const rootSaga = function* () {
  yield [
    fork(authenticationSaga),
    fork(personsDataSaga),
  ];
};
