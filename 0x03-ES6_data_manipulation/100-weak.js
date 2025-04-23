export const weakMap = new WeakMap();
/**
 * Track the number of times queryAPI is called for each endpoint and throws
 * an error if the load is high.
 *
 * @param {object} endpoint - The endpoint object with protocol and name properties.
 * @throws {Error} - If the number of queries for the endpoint is >= 5, throws
 * 'Endpoint load is high'.
 */
export function queryAPI(endpoint) {
  if (weakMap.has(endpoint)) {
    const count = weakMap.get(endpoint);
    if (count >= 4) {
      throw new Error('Endpoint load is high');
    }
    weakMap.set(endpoint, count + 1);
  } else {
    weakMap.set(endpoint, 1);
  }
}
