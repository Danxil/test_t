import { call, put, takeLatest } from 'redux-saga/effects';
import fetch from '../../helpers/fetch';

export const requestPersonsData = () => {
  return {
    type: 'REQUEST_PERSONS_DATA',
  };
};

export const initialState = {
  personsData: undefined,
  requestPersonsDataError: undefined,
};

export const personsDataReducer = (state = initialState, {
  type,
  personsData,
  requestPersonsDataError,
}) => {
  switch (type) {
    case 'REQUEST_PERSONS_DATA_SUCCESS':
      return {
        personsData,
      };
    case 'REQUEST_PERSONS_DATA_ERROR':
      return {
        requestPersonsDataError,
      };
    default:
      return state;
  }
};

export const fetchPersonsData = () => {
  return fetch('/persons', {
    method: 'GET',
  })
  .then((response) => {
    if (response.ok) {
      return response.json();
    }

    throw new Error(response.statusText);
  })
  .then((body) => {
    return body;
  });
};

export const requestPersonsDataSaga = function* () {
  try {
    const personsData = yield call(fetchPersonsData);

    yield put({ type: 'REQUEST_PERSONS_DATA_SUCCESS', personsData });
  } catch (error) {
    yield put({ type: 'REQUEST_PERSONS_DATA_ERROR', requestPersonsDataError: error.message });
  }
};

export const personsDataSaga = function* () {
  yield takeLatest('REQUEST_PERSONS_DATA', requestPersonsDataSaga);
};
