const obj1 = {
  a: 1,
  b: 3,
  c: {
    d: [1, 2, [3, 4]],
  },
  e: null,
};

const obj2 = {
  a: 1,
  b: 3,
  c: {
    d: [1, 2, [3, 4]],
  },
  e: null,
};

//  more cleaner code
function isEqual(arg1, arg2) {
  if (typeof arg1 !== typeof arg2) {
    return false;
  }

  if (
    typeof arg1 !== "object" &&
    typeof arg2 !== "object" &&
    typeof arg1 !== null &&
    typeof arg2 !== null
  ) {
    return Object.is(arg1, arg2);
  }

  if (arg1 === null && arg2 === null) {
    return Object.is(arg1, arg2);
  }

  const key1 = Object.keys(arg1);
  const key2 = Object.keys(arg2);

  if (key1.length !== key2.length) {
    return false;
  }

  for (let key of key1) {
    if (!key2.includes(key)) {
      return false;
    }
    if (!isEqual(arg1[key], arg2[key])) {
      return false;
    }
  }

  return true;
}

console.log(isEqual(obj1, obj2));

// function comparison
console.log(
  isEqual(
    () => {
      return 1;
    },
    () => {
      return 1;
    }
  )
);
// null comparison
console.log(isEqual(null, null));

console.log(isEqual("ajit", "ajit"));

// function isEqual(arg1, arg2) {
//   if (typeof arg1 !== typeof arg2) {
//     return false;
//   }
//   if (typeof arg1 === "number" && typeof arg2 === "number") {
//     return arg1 === arg2;
//   }

//   if (typeof arg1 === "string" && typeof arg2 === "string") {
//     return arg1 === arg2;
//   }
//   if (typeof arg1 === "boolean" && typeof arg2 === "boolean") {
//     return arg1 === arg2;
//   }
//   if (typeof arg1 === "undefined" && typeof arg2 === "undefined") {
//     return arg1 === arg2;
//   }
//   if (typeof arg1 === "symbol" && typeof arg2 === "symbol") {
//     return arg1 === arg2;
//   }
//   if (Array.isArray(arg1) && Array.isArray(arg2)) {
//     if (arg1.length !== arg2.length) return false;

//     for (let i = 0; i < arg1.length; i++) {
//       if (!isEqual(arg1[i], arg2[i])) return false;
//     }

//     return true;
//   }

//   if (arg1 === null && arg2 === null) {
//     return arg1 === arg2;
//   }
//   if (typeof arg1 === "object" && typeof arg2 === "object") {
//     const key1 = Object.keys(arg1);
//     const key2 = Object.keys(arg2);

//     if (key1.length !== key2.length) {
//       return false;
//     }

//     for (let key of key1) {
//       if (!key2.includes(key)) {
//         return false;
//       }

//       if (!isEqual(arg1[key], arg2[key])) {
//         return false;
//       }
//     }

//     return true;
//   }

//   if (typeof arg1 === "function" && typeof arg2 === "function") {
//     return arg1 === arg2;
//   }
// }
// const result = isEqual(
//   () => {
//     return 1;
//   },
//   () => {
//     return 1;
//   }
// );

// console.log(NaN === NaN);

// console.log(Object.is(NaN, NaN));
// console.log(result);
