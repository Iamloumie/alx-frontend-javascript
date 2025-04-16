import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';
/**
 * Handles the signup process by signing up a user and uploading a photo.
 * @param {string} firstName - The first name of the user.
 * @param {string} lastName - The last name of the user.
 * @param {string} fileName - The name of the file to upload
 * @returns {Promise} - A promise that resolves to an array of objects
 * containing the results of the signup and photo upload processes.
 * Each object has a 'status' property indicating whether the operation was fulfilled or rejected,
 * and a 'value' property containing the result or error message.
 */

export default async function handleProfileSignup(
  firstName,
  lastName,
  fileName,
) {
  const handlePromise = (promise) => promise
    .then((result) => ({
      status: 'fulfilled',
      value: result,
    }))
    .catch((error) => ({
      status: 'rejected',
      value: `Error: ${error.message}`,
    }));

  const promises = [
    handlePromise(signUpUser(firstName, lastName)),
    handlePromise(uploadPhoto(fileName)),
  ];

  return Promise.all(promises);
}
