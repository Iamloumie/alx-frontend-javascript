/**
 * Handle multiple promises
 */

import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.all([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((values) => {
      const user = values[0];
      const photo = values[1];
      return {
        status: 'fulfilled',
        value: {
          user,
          photo,
        },
      };
    })
    .catch(() => ({
      status: 'rejected',
      value: null,
    }));
}
