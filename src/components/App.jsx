import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { MenuItem } from 'react-bootstrap';
import { mainContainer, container } from './App.css';
import withAuthenticatin from '../containers/withAuthentication';
import withReduxRouter from '../containers/withReduxRouter';

const NavItem = withReduxRouter(({ to, id, pushRoute, children, active, ...props }) => {
  return (
    <MenuItem
      {...props}
      active={active}
      onClick={() => {
        pushRoute(to);
      }}
    >
      {children}
    </MenuItem>
  );
});

export class App extends React.Component {
  componentDidMount() {
    this.props.requestUserData();
  }

  render() {
    const {
      children,
      requestUserDataError,
      userData,
    } = this.props;

    if (requestUserDataError) {
      return (
        <span>{requestUserDataError}</span>
      );
    }

    if (userData) {
      return (
        <div className={mainContainer}>
          <div className="navbar navbar-default">
            <div className="container">
              <div
                className="navbar-header"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <a className="navbar-brand" href="#/">Welcome</a>
              </div>
              <ul className="nav navbar-nav navbar-right">
                <NavItem
                  key={'roamt-header-menu-item-home'}
                  to={'/home'}
                  id={'roamt-header-menu-item-home'}
                >
                  Home
                </NavItem>
                <NavItem
                  key={'roamt-header-menu-item-persons'}
                  to={'/persons'}
                  id={'roamt-header-menu-item-persons'}
                >
                  Persons page
                </NavItem>
                <li>
                  <a id="roamt-common-header-user">
                    <span className="fa fa-user" />&nbsp;
                    {`${userData.firstName} ${userData.lastName}`}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={`${container} container`}>
            {children}
          </div>
        </div>
      );
    }

    return null;
  }
}

App.propTypes = {
  children: PropTypes.element,
  requestUserDataError: PropTypes.string,
  userData: PropTypes.shape({
    username: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    roles: PropTypes.arrayOf(PropTypes.string),
  }),
  requestUserData: PropTypes.func.isRequired,
};

App.defaultProps = {
  children: null,
  requestUserDataError: null,
  userData: null,
};

export default withRouter(withAuthenticatin(App));
