class EventEmitter {
  #event;
  constructor() {
    this.#event = new Map();
  }

  on(key, fn) {
    const arrayOfList = [];
    if (this.#event.has(key)) {
      const eventLists = this.#event.get(key);
      eventLists.push(fn);
      this.#event.set(key, eventLists);
    } else {
      arrayOfList.push(fn);
      this.#event.set(key, arrayOfList);
    }
  }

  emit(key, ...args) {
    if (this.#event.has(key)) {
      const eventLists = this.#event.get(key);
      eventLists.forEach((event) => {
        event(...args);
      });
    }
  }
  display() {
    console.log(this.#event, "eventEmitter class");
  }
  once(key, fn) {
    const onceWrapper = (...args) => {
      fn(...args);
      this.off(key, onceWrapper);
    };

    this.on(key, onceWrapper);
  }
  off(key, fn) {
    if (fn === undefined || !this.#event.has(key)) {
      return;
    }

    const eventLists = this.#event.get(key);
    const neweventLists = eventLists.filter((elem) => {
      if (elem === fn) {
        return false;
      } else {
        return true;
      }
    });
    if (neweventLists.length === 0) {
      this.#event.delete(key);
    } else {
      this.#event.set(key, neweventLists);
    }
  }
}

const emitter = new EventEmitter();

function greet(name) {
  console.log(`Hello, ${name}!`);
}

function greet2(name) {
  console.log(`Hello, Good morning`);
}

emitter.once("welcome", greet);
emitter.emit("welcome", "Alice");
emitter.emit("welcome", "Alice");

emitter.on("welcome", greet);
emitter.emit("welcome", "ajit");
emitter.emit("welcome", "amit");
emitter.off("welcome", greet);
emitter.emit("welcome", "amit2");
