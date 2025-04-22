/** Function that returns an updated map for all items with initial quantity at 1 */
export default function updateUniqItems(map) {
  if (!(map instanceof Map)) {
    throw new TypeError('Expected a Map');
  }

  map.forEach((value, key) => {
    if (value === 1) {
      map.set(key, 100);
    }
  });

  return map;
}
