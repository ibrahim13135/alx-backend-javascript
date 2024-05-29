#  Important Knowledge
  For Promises
  - Call Stack
  --- Mechanism To Make Interpreter Track Your Calls
  --- When You Call A Function Its Added To The Stack
  --- When Function Executed Its Removed From The Stack
  --- The Interpreter Continue Calling From The Last Point Reached
  --- Call Stack Detect Web API And Leave It To The Browser To Handle It
  - Web API
  --- Methods Available From Environment => Browser
  --- When Complete It Add The Callback To The Callback Queue
  - Event Loop
  --- Wait The Call Stack To Finish
  --- Get Callback From Callback Queue
  --- Add Callback To Call Stack
  - Callback Queue









# Promise Intro
  - Promise Is One Of The Best Features In ES6
  - Promise Make It Easy To Support Asynchronous Programming
  - Promise in JavaScript Is Like Promise in Real Life
  - Promise Is Something That Will Happen in The Future
  - Promise Is A Placeholder For A Future Value
  - You Booked A Cinema Ticket, You Have A Promise From Cinema Owner 2 Have A Seat
  - You Got Task To Do, U Promised Your Boss To Do The Task
  - You Ordered Food From Restaurant
  --- [ Promise ] Is The Order Record
  --- [ The Future Value ] Is The Food You Will Receive
  - You Ordered iPhone From Souq Shop
  --- [ Promise ] Is The Order Record
  --- [ The Future Value ] Is The iPhone You Will Receive
  - Promise Is An Object
  - Promise Is The Event Completion Or Failure of Async Operation & Its Resulting Value.
  - JavaScript Use Callbacks For Asynchronous Programming
  --- [1] Function Called And Do The Task
  --- [2] Action Complete
  --- [3] Another Function Called
  --- [4] Action Complete
  --- [5] Another Function Called
  - In Complex Cases => Every Call Add Nesting Level
  - http://callbackhell.com/
  - Promise Avoiding Callback Hell Or Pyramid Of Doom
  - Promise Is One Of This States
  [1] Pending => Not Fulfilled Or Rejected
  [2] Fulfilled => Operation Succeeded
  [3] Rejected => Operation Failed


A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.




# Here is an overview of the methods available in Promises:

then(): Attaches a callback for the promise's fulfillment.

Syntax: promise.then(onFulfilled[, onRejected])
Parameters:
onFulfilled: Function called when the promise is fulfilled.
onRejected: Optional function called when the promise is rejected.
catch(): Attaches a callback for the promise's rejection.

Syntax: promise.catch(onRejected)
Parameters:
onRejected: Function called when the promise is rejected.
finally(): Attaches a callback executed regardless of the promise's outcome.

Syntax: promise.finally(onFinally)
Parameters:
onFinally: Function called when the promise settles (fulfilled or rejected).
then_resolve(): Returns a new promise resolved with the same value.

Syntax: promise.then_resolve(value)
Parameters:
value: Value to resolve the new promise.
then_reject(): Returns a new promise rejected with the same reason.

Syntax: promise.then_reject(reason)
Parameters:
reason: Reason to reject the new promise.
all(): Resolves when all promises in an iterable have resolved.

Syntax: Promise.all(iterable)
Parameters:
iterable: Iterable of promises.
allSettled(): Resolves when all promises in an iterable have settled.

Syntax: Promise.allSettled(iterable)
Parameters:
iterable: Iterable of promises.
any(): Resolves when at least one promise in an iterable resolves.

Syntax: Promise.any(iterable)
Parameters:
iterable: Iterable of promises.
race(): Resolves when the first promise in an iterable resolves or rejects.

Syntax: Promise.race(iterable)
Parameters:
iterable: Iterable of promises.
resolve(): Returns a resolved promise with a given value.

Syntax: Promise.resolve(value)
Parameters:
value: Value to resolve the promise.
reject(): Returns a rejected promise with a given reason.

Syntax: Promise.reject(reason)
Parameters:
reason: Reason to reject the promise.
defer(): Creates a new deferred promise.

Syntax: Promise.defer()
Examples
then():

javascript
Copy code
const promise = new Promise((resolve) => {
  resolve(42);
});

promise.then((value) => {
  console.log(value); // 42
});
catch():

javascript
Copy code
const promise = new Promise((resolve, reject) => {
  reject("Error!");
});

promise.catch((reason) => {
  console.error(reason); // Error!
});
finally():

javascript
Copy code
const promise = new Promise((resolve) => {
  resolve(42);
});

promise.finally(() => {
  console.log("Promise settled!");
});
then_resolve():

javascript
Copy code
const promise = new Promise((resolve) => {
  resolve(42);
});

const newPromise = promise.then_resolve();

newPromise.then((value) => {
  console.log(value); // 42
});
then_reject():

javascript
Copy code
const promise = new Promise((resolve, reject) => {
  reject("Error!");
});

const newPromise = promise.then_reject();

newPromise.catch((reason) => {
  console.error(reason); // Error!
});
all():

javascript
Copy code
const promises = [
  new Promise((resolve) => setTimeout(() => resolve("Promise 1 fulfilled!"), 2000)),
  new Promise((resolve) => setTimeout(() => resolve("Promise 2 fulfilled!"), 3000)),
  new Promise((resolve) => setTimeout(() => resolve("Promise 3 fulfilled!"), 1000))
];

Promise.all(promises).then((values) => {
  console.log(values); // ["Promise 1 fulfilled!", "Promise 2 fulfilled!", "Promise 3 fulfilled!"]
});
allSettled():

javascript
Copy code
const promises = [
  new Promise((resolve) => setTimeout(() => resolve("Promise 1 fulfilled!"), 2000)),
  new Promise((resolve, reject) => setTimeout(() => reject("Promise 2 rejected!"), 3000)),
  new Promise((resolve) => setTimeout(() => resolve("Promise 3 fulfilled!"), 1000))
];

Promise.allSettled(promises).then((results) => {
  console.log(results); 
  // [{status: "fulfilled", value: "Promise 1 fulfilled!"}, {status: "rejected", reason: "Promise 2 rejected!"}, {status: "fulfilled", value: "Promise 3 fulfilled!"}]
});
any():

javascript
Copy code
const promises = [
  new Promise((resolve) => setTimeout(() => resolve("Promise 1 fulfilled!"), 2000)),
  new Promise((resolve) => setTimeout(() => resolve("Promise 2 fulfilled!"), 3000)),
  new Promise((resolve) => setTimeout(() => resolve("Promise 3 fulfilled!"), 1000))
];

Promise.any(promises).then((value) => {
  console.log(value); // "Promise 3 fulfilled!" (since it resolves first)
});
race():

javascript
Copy code
const promises = [
  new Promise((resolve) => setTimeout(() => resolve("Promise 1 fulfilled!"), 2000)),
  new Promise((resolve) => setTimeout(() => resolve("Promise 2 fulfilled!"), 3000)),
  new Promise((resolve) => setTimeout(() => resolve("Promise 3 fulfilled!"), 1000))
];

Promise.race(promises).then((value) => {
  console.log(value); // "Promise 3 fulfilled!"
});
resolve():

javascript
Copy code
const promise = Promise.resolve(42);

promise.then((value) => {
  console.log(value); // 42
});
reject():

javascript
Copy code
const promise = Promise.reject("Error!");

promise.catch((reason) => {
  console.error(reason); // Error!
});
defer():

javascript
Copy code
const deferred = {};

deferred.promise = new Promise((resolve, reject) => {
  deferred.resolve = resolve;
  deferred.reject = reject;
});

setTimeout(() => {
  deferred.resolve("Deferred promise resolved!");
}, 2000);

deferred.promise.then((value) => {
  console.log(value); // Deferred promise resolved!
});
