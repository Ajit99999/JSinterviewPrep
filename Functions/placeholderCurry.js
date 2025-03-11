const _ = Symbol("_");

const sum = deepCurry((a, b, c, d) => a + b + c + d);

console.log(sum(1, 2, 3, 4)); // 10
console.log(sum(1, _, 3)(_, 4)(2)); // 10
console.log(sum(_, 2, _)(1)(3, 4)); // 10
console.log(sum(_, _, _, _)(1)(2)(3, 4));
// Deep Curry with Placeholders

function deepCurry(fn) {
  // let listArray = [];
  function sum(...arg) {
    // listArray = [...arg];
    arg = arg.filter((elem) => elem !== _);
    if (arg.length === fn.length) {
      return fn(...arg);
    } else {
      return (...arg2) => {
        arg = [...arg, ...arg2];
        return sum(...arg);
      };
    }
  }
  return sum;
}
