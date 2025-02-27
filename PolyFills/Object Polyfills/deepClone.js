const object1 = {
  a: 1,
  f: null,
  b: [20, 21, [22]],
  e: {
    f: {
      g: [1, 2, 3, [4, 5]],
    },
  },
};

const object2 = { ...object1 };

function deepClone(obj) {
  const res = (Array.isArray(obj) && []) || (obj === null ? null : {});
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      //   if (obj[key] === null) {
      //     continue;
      //   }
// If you want to omit the null value for input object
      const result = deepClone(obj[key]);
      res[key] = result;
    } else {
      res[key] = obj[key];
    }
  }
  return res;
}
const resObject = deepClone(object1);
resObject.e.f.g[3].push(15);
resObject.b[2].push(15);
console.log(JSON.stringify(resObject));
console.log(JSON.stringify(object1));
