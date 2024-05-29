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
