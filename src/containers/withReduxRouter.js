import { connect } from 'react-redux';
import { push } from 'react-router-redux';

export default (WrappedComponent) => {
  return connect(
    null,
    (dispatch) => {
      return {
        pushRoute: (to) => {
          return dispatch(push(to));
        },
      };
    },
  )(WrappedComponent);
};
