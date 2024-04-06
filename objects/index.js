let myBook = {
  title: 'JavaScript Introduction',

  author: 'Nathan Sebhastian',
};

// console.log(myBook);

// change the author property
myBook.author = 'John Doe';

// To delete a property from your object
delete myBook.author;

// To check if a certain property exists in your object
let person = {
  firstName: 'Nathan',
  lastName: 'Sebhastian',
};
// check if firstName exists
console.log('firstName' in person); // true 


// This JavaScript code demonstrates the usage of objects, including creating objects, accessing properties, modifying properties, deleting properties, and checking for the existence of properties. Let's break it down step by step:[1] Object Creation: let myBook = { title: 'JavaScript Introduction', author: 'Nathan Sebhastian', }; - This code creates an object named myBook with two properties: title and author. [2] Modifying a Property: myBook.author = 'John Doe'; - This line changes the value of the author property from 'Nathan Sebhastian' to 'John Doe'. [3] Deleting a Property: delete myBook.author; - This line deletes the author property from the myBook object. [4] Checking Property Existence: let person = {   firstName: 'Nathan',   lastName: 'Sebhastian', }; console.log('firstName' in person); // true - This code checks if the firstName property exists in the person object using the in operator. It logs true to the console because the firstName property does exist in the person object. [//5//] So, after executing this code, if you uncomment the console.log(myBook); line, you would get an empty object {} because the author property has been deleted. Additionally, the line console.log('firstName' in person); would print true to the console.