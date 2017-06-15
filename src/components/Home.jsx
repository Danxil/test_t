import React from 'react';
import withAuthenticatin from '../containers/withAuthentication';

const Home = () => {
  return (
    <div>
      <h4 className="page-header" id="page-header-home">Home</h4>
    </div>
  );
};

export default withAuthenticatin(Home);
