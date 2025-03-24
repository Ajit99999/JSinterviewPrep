const obj = {
  a: 1,
  b: 2,
  c: {
    d: 3,
    e: null,
    f: {
      h: [1, 2, 3, 4],
    },
  },
};

console.log(obj, "before freezing");

function deepFreeze(obj) {
  Object.freeze(obj);
  for (let key in obj) {
    // it's an older way for to avoaid any prototype polllution/ it only applying the freeze to it's
    // property only
    // Otherwise, you can always use Object.key().forEach() something like this.
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (typeof obj[key] === "object" && obj[key] !== null) {
        deepFreeze(obj[key]);
      }
    }
  }
  return obj;
}

deepFreeze(obj);

obj.a = 7;
obj.c.d = 13;
obj.c.e = undefined;
obj.c.f.h.push(100);
console.log(JSON.stringify(obj), "after freezing");

// object.freeze is only works on the 1st level, means on the shallow copy itself.
console.log(Object.isFrozen(obj), "check whether the object is freez or not");
