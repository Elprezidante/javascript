// Arrow functions
// This is a function that was introduced in the ECMA Script 6 and they give us the latest/modern way of defining functions in compact manner.
// At times the arrow function can be said to be anonymous functions why? This is because they use the names of the variables they are contained in


const sayHello = () => {
    console.log("This an Arrow Function")
}
sayHello();


console.log("=====================")

// create an arrow function that is able to find the product of three numbers
const product = (a, b, c) => {
    return a * b * c;
}
console.log(product(2, 3, 4));