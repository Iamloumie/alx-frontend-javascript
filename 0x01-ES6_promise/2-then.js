/**
 * This function takes a promise as an argument and
 * returns an object with the following properties:
 */
export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({
      status: 200,
      body: 'Success',
    }))
    .catch(() => new Error())
    // .finally() is called regardless of the promise's outcome
    .finally(() => {
      console.log('Got a response from the API');
    });
}
