// 𝗡𝗼𝗿𝗺𝗮𝗹𝗹 𝗖𝗮𝗹𝗹 𝗠𝗲𝘁𝗵𝗼𝗱
let person = {
  name: "amit",
  age: 26,
};

function render(address, quote) {
  console.log(
    `${quote} ${this.name} is ${this.age} years old belong to ${address}`
  );
}

render.call(person, "dkl", "Hello");

// 𝗣𝗼𝗹𝘆𝗙𝗶𝗹𝗹 𝗼𝗳 𝗖𝗮𝗹𝗹
Function.prototype.mycall = function (obj, ...arg) {
  if (typeof this !== "function") {
    throw Error("it's not function");
  }
  obj.fn = this;
  obj.fn(...arg);
};

render.mycall(person, "dkl", "Hello");
