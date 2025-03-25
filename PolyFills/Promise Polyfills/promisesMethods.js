function task1() {
  return new Promise((resolve, reject) =>
    setTimeout(() => resolve("Task 1"), 1000)
  );
}
function task2() {
  return new Promise((resolve, reject) =>
    setTimeout(() => resolve("Task 2"), 500)
  );
}
function task3() {
  return new Promise((resolve, reject) =>
    setTimeout(() => resolve("Task 3"), 200)
  );
}


function promiseAll(arrayOfPromises) {
  return new Promise((res, rej) => {
    let count = 0;
    let results = [];
    //  if it's an empty dont process at all.
    if (arrayOfPromises.length === 0) {
      res(results);
      return;
    }
    // it's generally a best practice & easy to use normal native promise
    // if we want to write an promise.All polyfill
    arrayOfPromises.forEach((promise, i) => {
      promise()
        .then((data) => {
          // since promise.All returns the data sequentially hence we are using this
          results[i] = data;
          count++;
          if (count === arrayOfPromises.length) {
            res(results);
          }
        })
        .catch((err) => {
          rej(err);
        });
    });
  });
}

// promiseAll([task1, task2, task3])
//   .then((data) => {
//     console.log(data, "success");
//   })
//   .catch((err) => {
//     console.log(err, "error");
//   });

// Promise.allSettled([])
//   .then((data) => {
//     console.log(data, "data");
//   })
//   .catch((err) => {
//     console.log(err, "error");
//   });

function promiseAllSettled(arrayOfPromises) {
  return new Promise((resolve) => {
    let count = 0;
    let results = [];

    // handling the empty promises scenario
    if (arrayOfPromises.length === 0) {
      return resolve(results);
    }
    arrayOfPromises.forEach((promise, index) => {
      promise()
        .then((data) => {
          results[index] = {
            status: "fulfilled",
            value: data,
          };
          count++;
        })
        .catch((err) => {
          results[index] = {
            status: "rejected",
            reason: err,
          };
          count++;
        })
        .finally(() => {
          // here we are resolving in the finall block because if the last promise got into catch block
          //    then it will return anything that'why and as we know finally block always works
          if (count === arrayOfPromises.length) {
            resolve(results);
          }
        });
    });
  });
}

// promiseAllSettled([task1, task2, task3]).then((data) => {
//   console.log(data, "data2");
// });

function promiseRace(arrayOfPromises) {
  return new Promise((res, rej) => {
    arrayOfPromises.forEach((promise) => {
      promise()
        .then((data) => {
          res(data);
        })
        .catch((err) => {
          rej(err);
        });
    });
  });
}

// Promise.race([task1(), task2(), task3()])
//   .then((data) => {
//     console.log(data, "data race promise");
//   })
//   .catch((err) => {
//     console.log(err, "error race promise");
//   });

// promiseRace([task1, task2, task3])
//   .then((data) => {
//     console.log(data, "data race custom promise");
//   })
//   .catch((err) => {
//     console.log(err, "error race custom promise");
//   });

function promiseAny(arrayOfPromises) {
  return new Promise((res, rej) => {
    let count = 0;
    let result = [];
    arrayOfPromises.forEach((promise, i) => {
      promise()
        .then((data) => {
          res(data);
        })
        .catch((err) => {
          result[i] = err;
          count++;
          // here we should calculate inside the error block instead of finally block
          //   because finally execute after success/failure always
          if (count === arrayOfPromises.length) {
            rej(new AggregateError(result));
          }
        });
    });
  });
}



// promiseAny([task1, task2, task3])
//   .then((data) => {
//     console.log(data, "data  promise any custom");
//   })
//   .catch((err) => {
//     console.log(err, "error  promise any custom");
//   });

  // Promise.any([task1(), task2(), task3()])
//   .then((data) => {
//     console.log(data, "data race promise any");
//   })
//   .catch((err) => {
//     console.log(err, "error race promise any");
//   });