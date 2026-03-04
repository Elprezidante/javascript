// Arrow functions with parameters

const greet = (name) => {
    console.log("Hello "  + name+  " How have you been? I trust you are okay")
}
greet("Benson")


// Example 2
console.log("=======================")


//Below is a function to find the area of a circle
console.log("==========")
// Below is a function to find the area of a circle
const CircleArea = (pi, radius) =>{
    let area = pi * radius * radius
    console.log("The area of the circle is: " + area + "cm\u00B2")
}

CircleArea(3.142, 7);
CircleArea(3.142, 28)

console.log("======================")

// come up with an example of youer own of arrow function that utilises 3 parameters

const findVolume = (length, width, height) => {
    return length * width * height;
};

console.log(findVolume(5, 3, 2));