// Javascript for loop
// Loops are used to iterate through something  a number of times 
// 1.For  keyword followed by parenthesis 
// 2. Inside the parenthesis we have initialization; condition and increment/decrement

for(let i =5; i<10; i++){
    console.log("The new value of i is:",i)
}
console.log("=================================")

for(let i=1; i<=10; i++){

    if(i===6){
        console.log("This is the number 6")
        continue;

    }
    console.log(i)
}

// create a for loop that will be able to print out all the leap years from 2000 to 2026
for(let year = 2000; year <= 2026; year++)
    if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
        console.log(year + " is a leap year.");
    }


//  Write a for loop to print all odd numbers from 1 to 19. Task: Write a for loop to count down from 10 to 1 and print the numbers in the console. Task: Write a for loop to find the largest number in the array: [10, 20, 4, 45, 99, 1]. Task: Write a for loop to print the multiplication table of 5 from 5 x 1 to 5 x 10.
for(let i = 1; i <= 19; i++)
    if(i % 2 !== 0){
        console.log(i)
    }

for(let i = 10; i >= 1; i--){
    console.log(i)
}
let arr = [10, 20, 4, 45, 99, 1];
let largest = arr[0];
for(let i = 1; i < arr.length; i++){
    if(arr[i] > largest){
        largest = arr[i]
    }
}
console.log("The largest number in the array is:", largest)
for(let i = 1; i <= 10; i++){
    console.log("5 x " + i + " = " + (5 * i))
}
// what qualifies a data type to be an object in js?
// In JavaScript, a data type qualifies as an object if it is a collection of properties and methods. Objects can store multiple values in the form of key-value pairs, where the keys are strings (or symbols) and the values can be of any data type, including other objects. Objects can also have methods, which are functions that operate on the object's properties. Examples of objects in JavaScript include arrays, functions, and custom objects created using object literals or constructor functions.

// difference between the for loop in python and js?
// The main difference between the for loop in Python and JavaScript is the syntax and structure. In Python, the for loop is typically used to iterate over a sequence (like a list or a range) and has a more concise syntax. In JavaScript, the for loop is more flexible and can be used for various purposes, including iterating over arrays, objects, or even using it as a traditional counting loop. Additionally, JavaScript has other looping constructs like while loops and for...in loops that provide different ways to iterate over data structures.
// a case scencenario where a for loop is more appropriate ?
// anonymous function in js?
// An anonymous function in JavaScript is a function that is defined without a name. It is often used as a callback function or as an argument to another function. Anonymous functions can be created using the function keyword or using arrow function syntax. They are useful for situations where you need to define a function on the fly without the need for a named reference. For example, when using the map method to transform an array, you can use an anonymous function to specify the transformation logic directly within the method call.


