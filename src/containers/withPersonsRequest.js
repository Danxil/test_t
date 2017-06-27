import { connect } from 'react-redux';
import {
  requestPersonsData,
} from '../redux/modules/personsData';

export default (WrappedComponent) => {
  return connect(
    ({ persons: { personsData, requestPersonsDataError } }) => {
      return {
        personsData,
        requestPersonsDataError,
      };
    },
    (dispatch) => {
      return {
        requestPersonsData: () => {
          return dispatch(requestPersonsData());
        },
      };
    },
  )(WrappedComponent);
};
