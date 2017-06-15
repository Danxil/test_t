import { combineReducers } from 'redux';
import { fork } from 'redux-saga/effects';
import { routerReducer } from 'react-router-redux';
import { authenticationReducer, authenticationSaga } from './authentication';

export const rootReducer = combineReducers({
  authentication: authenticationReducer,
  routing: routerReducer,
});

export const rootSaga = function* () {
  yield [
    fork(authenticationSaga),
  ];
};
