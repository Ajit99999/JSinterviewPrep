// 𝗡𝗼𝗿𝗺𝗮𝗹 𝗔𝗽𝗽𝗹𝘆 𝗺𝗲𝘁𝗵𝗼𝗱
let person = {
  name: "amit",
  age: 26,
};

function render(address, quote) {
  console.log(
    `${quote} ${this.name} is ${this.age} years old belong to ${address}`
  );
}

render.apply(person,["dkl", "Hello"]);

// 𝗣𝗼𝗹𝘆𝗳𝗶𝗹𝗹 𝗼𝗳 𝗮𝗽𝗽𝗹𝘆
Function.prototype.myapply = function (obj,arg) {
  if (typeof this !== "function") {
    throw Error("it's not function");
  }
  obj.fn = this;
  obj.fn(...arg);
};

render.myapply(person, ["dkl", "Hello"]);
