import { uploadPhoto, createUser } from './utils.js';

// The function asyncUploadUser is an async function that uploads a photo and creates a user.
// It returns a promise that resolves to an object containing the photo and user.
// The function uses async/await syntax to handle asynchronous operations.
// The function is called and the result is logged to the console.
// If an error occurs, it is caught and logged to the console.

export default async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    return { photo, user };
  } catch (error) {
    console.log(error);
    return null;
  }
}
