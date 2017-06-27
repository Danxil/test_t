import { call, put, takeLatest } from 'redux-saga/effects';
import fetch from '../../helpers/fetch';

const ACCESS_DENIED_ERROR_MESSAGE = 'Dear user, unfortunately you are not authorized to ' +
'access the requested page. Please refer to the Request Internal Access ' +
'Rights functionality to acquire the necessary rights.';

export const requestUserData = () => {
  return {
    type: 'REQUEST_USER_DATA',
  };
};

export const initialState = {
  userData: undefined,
  requestUserDataError: undefined,
};

export const authenticationReducer = (state = initialState, {
  type,
  userData,
  requestUserDataError,
}) => {
  switch (type) {
    case 'REQUEST_USER_DATA_SUCCESS':
      return {
        userData,
      };
    case 'REQUEST_USER_DATA_ERROR':
      return {
        requestUserDataError,
      };
    default:
      return state;
  }
};

export const fetchUserData = () => {
  return fetch('/user/profile', {
    method: 'GET',
  })
  .then((response) => {
    if (response.ok) {
      return response.json();
    }

    if (response.status === 401 || response.status === 403) {
      throw new Error(ACCESS_DENIED_ERROR_MESSAGE);
    }

    throw new Error(response.statusText);
  })
  .then((body) => {
    if (body.roles.indexOf('ROLE_ROAMT_APPLICATION_ACCESS') === -1) {
      throw new Error(ACCESS_DENIED_ERROR_MESSAGE);
    }

    return body;
  });
};

export const requestUserDataSaga = function* () {
  try {
    const userData = yield call(fetchUserData);

    yield put({ type: 'REQUEST_USER_DATA_SUCCESS', userData });
  } catch (error) {
    yield put({ type: 'REQUEST_USER_DATA_ERROR', requestUserDataError: error.message });
  }
};

export const authenticationSaga = function* () {
  yield takeLatest('REQUEST_USER_DATA', requestUserDataSaga);
};
