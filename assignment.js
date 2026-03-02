// Triple equal sign in javascript is used for strict equality comparison. It checks both the value and the type of the operands. If both the value and the type are the same, it returns true; otherwise, it returns false. For example, if we compare the number 5 and the string "5" using the triple equal sign (===), it will return false because they are of different types (number and string). However, if we compare the number 5 and the number 5 using the triple equal sign, it will return true because they are of the same type and have the same value. In contrast, the double equal sign (==) performs a loose equality comparison, which means it only checks for value equality and performs type coercion if necessary. Therefore, using double equal sign to compare 5 and "5" would return true because it converts the string "5" to a number before comparing.


let distance = 500

if(distance<0){
    console.log("You ought to pay 5 USD.")

}

else if (distance>= 101 && distance <= 500){
    console.log("You ought to pay 10 USD")

}

else if(distance >=501 && distance <=1000){
    console.log("You ought to pay 20 USD ")

}

else {
    console.log("You ought to pay 40 USD.")
}
    
// how to change a js file to a json file 
// To change a JavaScript file to a JSON file, you need to follow these steps:
// 1. Remove any JavaScript-specific syntax, such as variable declarations (e.g., var, let, const) and function definitions.
// 2. Ensure that the data is structured in a valid JSON format, which consists of key-value pairs enclosed in curly braces {}. Each key should be a string, and the value can be a string, number, boolean, array, or another JSON object.
// 3. Save the file with a .json extension instead of .js. For example, if your JavaScript file is named "data.js", you would save it as "data.json".
