import { connect } from 'react-redux';
import {
  requestUserData,
} from '../redux/modules/authentication';

export default (WrappedComponent) => {
  return connect(
    ({ authentication: { userData, requestUserDataError } }) => {
      return {
        userData,
        requestUserDataError,
      };
    },
    (dispatch) => {
      return {
        requestUserData: () => {
          return dispatch(requestUserData());
        },
      };
    },
  )(WrappedComponent);
};
