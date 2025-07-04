## Session 04 - Assessment

### Questions

1. What are the three states of a `Promise`?
2. How does the `async` keyword affect a function's return value?
3. Explain the purpose of the `await` keyword.
4. What is a callback function and how is it used in asynchronous operations?
5. Describe the role of the event loop in JavaScript.
6. Write a function called `delayedGreeting` that takes a name as an argument and logs a greeting message to the console after a 2-second delay using `setTimeout`. Use a callback function to achieve this.

## Answers

1. - Pending
   - Fulfilled
   - Rejected

2. This function always returns a Promise. If the function returns a value, the Promise is resolved with that value. If the function throws an error, the Promise is rejected with that error.

3. await is used to wait for the result of an asynchronous operation without blocking the entire program.

4. A callback function is a function that is passed as an argument to another function and is executed later, usually after an asynchronous operation is completed

    - How it works

    function fetchData(callback) {
        setTimeout(() => {
                console.log("Data fetched");
                callback("This is the data");
                }, 2000);
            }

   function handleData(data) {
       console.log("Received:", data);
       }

    fetchData(handleData);

   - fetchData() starts an async operation (simulated with setTimeout).

   - It receives a callback handleData.

   - After 2 seconds, it “calls back” the function you passed and gives it the result.

5. The event loop is a key component of JavaScript's concurrency model. It allows non-blocking, asynchronous execution, enabling JavaScript (which is single-threaded) to handle multiple tasks like I/O operations, timers, and user interactions smoothly.

6. function delayedGreeting(name) {
    function greet() {
        console.log(`Hello, ${name}!`);
        }

  setTimeout(() => greet(), 2000); 
  }

delayedGreeting("Sandeeptha");





