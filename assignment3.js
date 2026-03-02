// <!-- An anonymous function in JavaScript is a function that is defined without a name. It is often used as a callback function or as an argument to another function. Anonymous functions can be created using the function keyword or using arrow function syntax. They are useful for situations where you need to define a function on the fly without the need for a named reference. For example, when using the map method to transform an array, you can use an anonymous function to specify the transformation logic directly within the method call. -->
// functions with parameters
function greet(name){
    console.log("Hello, " + name + "!");
}
greet("Alice");
// what is a parameter in js?
// In JavaScript, a parameter is a variable that is used in the definition of a function to represent the value that will be passed to the function when it is called. Parameters allow you to create functions that can accept different inputs and perform operations based on those inputs. When you call a function, you can provide arguments that correspond to the parameters defined in the function, allowing the function to work with different data each time it is invoked.

// what are  functions with parameters used for in js?
// Functions with parameters in JavaScript are used to create reusable blocks of code that can perform specific tasks based on the input provided. They allow you to pass different values to the function each time it is called, making the function more flexible and adaptable to various situations. For example, a function that calculates the area of a rectangle can take the length and width as parameters, allowing you to calculate the area for different rectangles without having to write separate code for each one. Functions with parameters help improve code organization, reduce redundancy, and enhance the overall functionality of your JavaScript programs.
// more on functions with parameters in js
function add(a, b){
    return a + b;
}
let sum = add(5, 10);
console.log("The sum of 5 and 10 is:", sum);
// example of a function with parameters 
function calculateArea(radius){
    return Math.PI * radius * radius;
}
let area = calculateArea(5);
console.log("The area of a circle with radius 5 is:", area);
