// object assign

let obj1 = {
  name: "ajit",
  age: 28,
  address: {
    pincode: 759001,
    block: {
      lane: "shaymacharanpur",
    },
  },
};

// const copiedObject = Object.assign({}, obj1, { name: "bapan" }, name = "hello", [1,2,3,4],100);
// console.log(copiedObject, "new objec");

// copiedObject.address.pincode = 560102;
// copiedObject.age = 35;
// console.log(copiedObject, "new objec");

// console.log(obj1, "old object");

//  here we are directly using myAssign functio on the Object itself, because it's an static method not an instance method
//  it's not creating a copy of target object, rather than mutating the target object itself.

Object.myAssign = function (target, ...source) {
  if (target === null) {
    throw new Error("It's can not be null");
  }
  target = Object(target);
  for (let i = 0; i <= source.length - 1; i++) {
    if (source[i] === null) {
      continue;
    }
    const obj = source[i];
    for (let key in obj) {
      // this is for checking the key is the part of that source object or not
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        target[key] = obj[key];
      }
    }
  }
  return target;
};

// const copiedObject = Object.myAssign(
//   {},
//   obj1,
//   { name: "bapan" },
//   { name: "hello" },
//   [1, 2, 3, 4],
//   100
// );
// console.log(copiedObject, "new Object");

obj1 = Object.create(null);
obj1.name = "ajit";
// obj1.hasOwnProperty = () => false;
// console.log(obj1.hasOwnProperty("name"));

console.log(Object.prototype.hasOwnProperty.call(obj1, "name"));
