import React from 'react';
import PropTypes from 'prop-types';
import { Panel } from 'react-bootstrap';
import withAuthenticatin from '../containers/withAuthentication';
import withPersons from '../containers/withPersonsRequest';


export class Persons extends React.Component {
  componentDidMount() {
    this.props.requestPersonsData();
  }

  render() {
    const {
      requestPersonsDataError,
      personsData,
    } = this.props;

    if (requestPersonsDataError) {
      return (
        <span>{requestPersonsDataError}</span>
      );
    }

    if (personsData) {
      const personsPanels = personsData.map(person =>
        <Panel
          key={person.id}
          id={person.id}
        >
          {person.name}
        </Panel>,
    );

      return (
        <div>
          <h4 className="page-header" id="page-header-persons">Persons page</h4>
          <div>
            {personsPanels}
          </div>
        </div>
      );
    }

    return null;
  }

}

Persons.propTypes = {
  requestPersonsDataError: PropTypes.string,
  requestPersonsData: PropTypes.func.isRequired,
  personsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ),
};

Persons.defaultProps = {
  requestPersonsDataError: null,
  personsData: null,
};

export default withAuthenticatin(withPersons(Persons));
