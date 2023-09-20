// Task 1
// Create an array called "names" and set it's items to be
// David, Ann, Leia, Mathew and Mark.
// Print the array.
const names = ["David", "Ann", "leia", "Mathew", "Mark"];
console.log(names);
// Task 2
// Print the second item of the array from the task 1.
console.log(names[1]);
// Task 3
// Print the length of the array.
console.log(names.length);
// Task 4
// Print the last item of the array
console.log((names.length-1));
// Task 5
// Add Peter as the last item to the array and print the whole array
names.push("peter");
console.log(names);
// Task 6
// Print the array with spaces, not commas
console.log(names.join (""));
// Task 7
// Replace Mathew in the array with Lisa and Abraham 
names.slice(names, 3,1, "lisa", "Abraham");

// Task 8
// Sort the array in the alphabetical order and print it
console.log(names.sort());

// Create an array called numbers and fill it with values 1, 7, 45, 32, 27, 86.
// Sort the numbers from largest to smallest. Print them.
let numbers = [1, 7,45,32,27,86];
let newNum = numbers.sort();
console.log(numbers.reverse());


// Task 10
// Randomize the numbers array.
let scores = [20,100, 1,2];
scores.sort((a,b) => 0.5 - Math.random());
// Find the largest and smallest value from the numbers array using sort() function.
// Print those values.
const array = [1, 2,3,4,5];
array.sort(function(a,b) {return a - b});
const smallest = numbers[0];
const largest = numbers[numbers.length - 1];

console.log(`Smallest value: ${smallest}`);
console.log(`largest value: ${largest}`);
