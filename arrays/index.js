let birds = ['Owl', 'Eagle', 'Parrot', 'Falcon'];

let mixedArray = ['Bird', true, 10, 5.17];

// Access the first element in the array
console.log(birds[0]); // Owl

// Access the second element in the array
console.log(birds[1]); // Eagle

// You can also assign a new value to a specific index using the assignment operator.
birds[2] = 'Vulture';
console.log(birds);

// The unshift() method can be used to add an item from the front at index 0:
let fishes = ['Salmon', 'Goldfish', 'Tuna'];
fishes.unshift('Sardine');
console.log(fishes);

// On the other hand, the shift() method can be used to remove an item from index 0:
fishes.shift();
console.log(fishes);

// The indexOf() method can be used to find and return the index of an item in the array.
let pos = fishes.indexOf('Tuna');
console.log(pos); 


// This JavaScript code demonstrates various operations on arrays. Let's break it down step by step: [1] Creating an Array: let birds = ['Owl', 'Eagle', 'Parrot', 'Falcon']; - Here, an array named birds is created with four elements: 'Owl', 'Eagle', 'Parrot', and 'Falcon'. [2] Accessing Array Elements: console.log(birds[0]); // Owl console.log(birds[1]); // Eagle - These lines of code access the first and second elements of the birds array using their respective indexes (0 and 1) and print them to the console. [3] Modifying Array Elements: birds[2] = 'Vulture'; console.log(birds); - This line updates the value of the third element in the birds array from 'Parrot' to 'Vulture'. Then, it prints the modified array to the console. [4] Adding and Removing Elements: let fishes = ['Salmon', 'Goldfish', 'Tuna']; fishes.unshift('Sardine'); // Add 'Sardine' to the beginning of the array console.log(fishes); fishes.shift(); // Remove the first element from the array console.log(fishes); - These lines add the string 'Sardine' to the beginning of the fishes array using the unshift() method and then remove the first element from the array using the shift() method. The resulting arrays are printed to the console after each operation. [5] Finding Index of an Element: let pos = fishes.indexOf('Tuna'); console.log(pos); - This line finds the index of the string 'Tuna' in the fishes array using the indexOf() method and assigns it to the variable pos. The index of 'Tuna' is then printed to the console. [//6] So, when you run this code, it will output: Owl Eagle ["Owl", "Eagle", "Vulture", "Falcon"] ["Sardine", "Goldfish", "Tuna"] ["Goldfish", "Tuna"] 1 - These operations demonstrate some of the common functionalities of arrays in JavaScript, such as accessing elements by index, modifying elements, adding and removing elements, and finding the index of an element.