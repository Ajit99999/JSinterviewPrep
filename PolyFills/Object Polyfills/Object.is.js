Object.myIs = function (arg1, arg2) {
  // for handling NaN
  if (arg1 !== arg1 && arg2 !== arg2) {
    return true;
  }
  // handles the -0 & +0 case
  if (arg1 === 0 && arg2 === 0) {
    return 1 / arg1 === 1 / arg2;
  }
  return arg1 === arg2;
};

console.log(Object.myIs(-0, 0), "custom is Fucntion");
// console.log(NaN === NaN);
// console.log(Object.is(NaN, NaN));
console.log(-0 === +0);

// console.log(1 / -0)
// console.log(1 / +0)


