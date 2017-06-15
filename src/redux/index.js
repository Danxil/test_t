import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { hashHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import { rootReducer, rootSaga } from './modules';

export const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  sagaMiddleware,
  routerMiddleware(hashHistory),
];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export default () => {
  const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares),
  );

  sagaMiddleware.run(rootSaga);

  return store;
};
