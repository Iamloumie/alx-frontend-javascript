/** Function that returns a boolean if all the elements in the array exists within the set */
export default function hasArrayValues(array, set) {
  const setToArr = Array.from(set);
  return array.filter((x) => !setToArr.includes(x)).length === 0;
}
