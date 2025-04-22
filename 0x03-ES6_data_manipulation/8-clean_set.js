/** Function that returns a string of all the set values that start
 * with a specific string (startString)
 */
export default function cleanSet(set, startString) {
  if (!startString || startString.length === 0 || typeof startString !== 'string'
  ) {
    return '';
  }

  let finalValue = '';
  set.forEach((item) => {
    // Check if the item is a string and starts with startString
    // If so, slice the item from startString and add it to finalValue
    // Otherwise, skip the item
    if (item && typeof item === 'string' && item.startsWith(startString)) {
      finalValue += `${item.slice(startString.length)}`;
    }
  });
  return finalValue.slice(0, -1);
}
