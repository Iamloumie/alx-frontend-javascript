/** Function that returns a boolean if all the elements in the array exists within the set */
export default function hasArrayValues(array, set) {
  // Check if the array is empty
  if (array.length === 0) {
    return true;
  }

  // Check if all elements in the array exist in the set
  return array.every((element) => set.has(element));
}
