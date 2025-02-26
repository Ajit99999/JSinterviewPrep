const a1 = [1, [2, 4], [5, [6, 7]]];

console.log(a1.flat(2));
// using proper flat native method to de-structure the whole nested array into one array 

Array.prototype.myFlat = function (depth = 1) {
  function flattenArray(array, depth) {
    const res = [];
    if (depth === 0) {
      return array;
    } else {
      for (let i = 0; i <= array.length - 1; i++) {
        if (Array.isArray(array[i])) {
          res.push(...flattenArray(array[i], depth - 1));
        } else {
          res.push(array[i]);
        }
      }
    }
    return res;
  }
  return flattenArray(this, depth);
};

console.log(a1.myFlat(2));


// without using depth, in one go de-structure the whole nested array into one array
function flattenArray(array) {
  const res = [];
  for (let i = 0; i <= array.length - 1; i++) {
    if (Array.isArray(array[i])) {
      res.push(...flattenArray(array[i]));
    } else {
      res.push(array[i]);
    }
  }
  return res;
}
console.log(flattenArray(a1));
