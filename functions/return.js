// A function can also have a return statement inside the code block. A return statement is used to return a value back to the caller.
function sum(a, b) {
  return a + b;
}

let result = sum(3, 2);
console.log(result); 


// This JavaScript code defines a function named sum which takes two parameters a and b and returns their sum. Let's break it down: [1] Defining the sum Function: function sum(a, b) {  return a + b; } - This function sum takes two parameters a and b and returns their sum using the + operator. [2] Invoking the sum Function: let result = sum(3, 2); - Here, the sum function is invoked with arguments 3 and 2. The function returns the sum of 3 and 2, which is 5, and assigns it to the variable result. [3] Logging the Result: console.log(result); - This line logs the value of result to the console. Since result holds the value returned by the sum function, which is 5, it prints 5 to the console. [//4//] So, when you run this code, it will output: 5 - This demonstrates how the return statement is used to return a value from a function, allowing that value to be used elsewhere in the code. In this case, the sum of 3 and 2 is calculated inside the sum function and then returned for use in the result variable.