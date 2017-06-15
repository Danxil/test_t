import { BASE_URL } from '../../config';

export default (url, options) => {
  return fetch(`${BASE_URL}${url}`, {
    credentials: 'same-origin',
    ...options,
  });
};
