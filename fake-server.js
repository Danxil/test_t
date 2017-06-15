/* eslint import/no-extraneous-dependencies: 0 */
import express from 'express';
import {
  userProfileMock,
  personMock,
  generateItems,
} from './__mocks__/';

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/user/profile', (req, res) => {
  setTimeout(() => {
    res.send(userProfileMock());
  }, 500);
});

app.get('/persons', (req, res) => {
  setTimeout(() => {
    res.send(generateItems(personMock));
  }, 500);
});

app.listen(9001, () => {
  console.log('Fake server listening on port 9001');
});
