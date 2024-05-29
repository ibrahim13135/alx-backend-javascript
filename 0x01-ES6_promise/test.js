/*
  Important Knowledge
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
*/





// window.setTimeout(() => console.log("123"), 0)
// console.log("hello it me");

// window.setTimeout(() => console.log(myVar)); // Web API


// let myVar = 200;

// myVar += 100;



// console.log("one");
// window.alert("error");
// console.log("two");



let myPromes = new Promise((resolve, reject) => {

    let connect = true;

    if (connect) {
        resolve("connected")
    }
    else (
        reject("disconnected")
    )
    
    
}).then(
    (resolved) => console.log(resolved),
    (rejected) => console.log(rejected)
)

//console.log(typeof(myPromes))


// const theResloved = (resolved) => console.log(resolved)
// const theRejected = (rejected) => console.log(rejected)

// myPromes.then(theResloved, theRejected);
