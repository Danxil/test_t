/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import Chance from 'chance';

const chance = new Chance();

export const generateItems = (factory, count = 10) => {
  if (count > 1) {
    return [...generateItems(factory, count - 1), factory()];
  }

  return [factory(count)];
};

export const userProfileMock = () => {
  return {
    username: 'id967981',
    firstName: 'Vadym',
    lastName: 'Bondarenko',
    email: 'vadym.bondarenko.ext@bics.com',
    phone: null,
    roles: [
      'ROLE_ROAMT_VIEW_SUPPLIER_COST',
      'ROLE_ROAMT_APPLICATION_ACCESS',
      'ROLE_ROAMT_VIEW_BICS_REGION',
    ],
  };
};

export const personMock = () => {
  return {
    name: chance.name(),
    id: chance.natural(),
  };
};
