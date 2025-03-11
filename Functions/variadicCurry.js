const add = variadicCurry((...nums) => nums.reduce((a, b) => a + b, 0));

console.log(add(1)(2)(3, 4)(5).evaluate()); // 15
console.log(add(10, 20)(30).evaluate()); // 60
console.log(add().evaluate()); // 0

function variadicCurry(fn) {
  function reduceFn(...arg) {
    function endResult(...arg2) {
      return reduceFn(...arg, ...arg2);
    }
    endResult.evaluate = function () {
      const res = fn(...arg);
      return res;
    };
    return endResult;
  }
  return reduceFn;
}
