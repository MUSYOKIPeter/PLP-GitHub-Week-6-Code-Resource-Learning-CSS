function greet() {
  // function body here

  console.log('Hello!');
}
greet(); // Hello!

// How you use that name parameter inside the function
function greet(name) {
  console.log(`Hello, ${name}!`);

  console.log('Nice weather today, right?');
}
greet('MUSYOKI'); 


// This JavaScript code demonstrates the usage of regular functions to greet users with and without providing a name parameter. Let's break it down: [1] Defining the First Function: function greet() { console.log('Hello!'); } - This function named greet takes no parameters and simply logs 'Hello!' to the console when invoked. [2] Invoking the First Function: greet(); // Hello! - This line invokes the greet function without providing any arguments. As a result, it logs 'Hello!' to the console. [3] Redefining the greet Function: function greet(name) { console.log(`Hello, ${name}!`); console.log('Nice weather today, right?'); } - This time, the greet function is redefined to take one parameter named name. It logs a greeting with the provided name and a follow-up message about the weather. [3] Invoking the Updated greet Function: greet('MUSYOKI'); - Here, the greet function is invoked with the argument 'MUSYOKI'. As a result, it logs: 'Hello, MUSYOKI!' 'Nice weather today, right?' [//4//] So, when you run this code, it will output: Hello! Hello, MUSYOKI! Nice weather today, right?





