// 𝗡𝗼𝗿𝗺𝗮𝗹 𝗯𝗶𝗻𝗱 𝗺𝗲𝘁𝗵𝗼𝗱
let person = {
  name: "amit",
  age: 26,
};

function render(address, quote) {
  console.log(
    `${quote} ${this.name} is ${this.age} years old belong to ${address}`
  );
}

const renderReturnFunc1 = render.bind(person,"dkl");
renderReturnFunc1("Hello")

// 𝗣𝗼𝗹𝘆𝗳𝗶𝗹𝗹 𝗼𝗳 𝗯𝗶𝗻𝗱
Function.prototype.mybind = function (obj,...arg1) {
  if (typeof this !== "function") {
    throw Error("it's not function");
  }
  obj.fn = this;
  
  return function(...arg2)
  {
    obj.fn(...arg1,...arg2);
  }
};

const renderReturnFunc2 = render.mybind(person,"dkl");
renderReturnFunc2("Hello")
